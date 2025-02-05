import React, { useCallback, useLayoutEffect, useState, useMemo } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Platform, VirtualizedList } from 'react-native';
import { Appbar, Card, Button, Dialog, Paragraph, Portal, useTheme, Chip, TouchableRipple } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { denormalize } from 'normalizr';
import moment from 'moment';
import startCase from 'lodash.startcase';
import isEmpty from 'lodash.isempty';

import {
  damagesEntity,
  deleteOneInspection,
  getOneInspectionById,
  selectDamageEntities,
  selectInspectionEntities,
  selectImageEntities,
  selectPartEntities,
  selectTaskEntities,
  selectVehicleEntities,
  imagesEntity,
  inspectionsEntity,
  tasksEntity,
  taskStatuses,
  vehiclesEntity,
} from '@monkvision/corejs';
import { PartListSection, usePartDamages } from '@monkvision/react-native-views';
import { utils, useFakeActivity, useInterval } from '@monkvision/toolkit';
import { Loader } from '@monkvision/ui';

import useRequest from 'hooks/useRequest';
import Img from 'components/Img';

import ActionMenu from 'components/ActionMenu';
import ImageViewer from 'components/ImageViewer';

import { DAMAGES, LANDING, TASK_READ, INSPECTION_UPDATE, DAMAGE_READ } from 'screens/names';

const { spacing } = utils.styles;
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  card: {
    marginHorizontal: spacing(2),
    marginVertical: spacing(1),
    overflow: 'hidden',
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
  images: {
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'row',
    flexShrink: 0,
    flexWrap: 'nowrap',
  },
  tasks: {
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'row',
    flexShrink: 0,
    flexWrap: 'nowrap',
    marginBottom: spacing(2),
  },
  image: {
    width: 300,
    height: 225,
    marginHorizontal: spacing(0),
  },
  previewImage: {
    flex: 1,
    width: 400,
    height: 400,
    marginHorizontal: spacing(0),
  },
  dialog: {
    maxWidth: 450,
    alignSelf: 'center',
    padding: 12,
  },
  dialogDrawing: { display: 'flex', alignItems: 'center' },
  dialogContent: { textAlign: 'center' },
  dialogActions: { flexWrap: 'wrap' },
  button: { width: '100%', marginVertical: 4 },
  actionButton: { marginLeft: spacing(1) },

  process: {
    ...Platform.select({
      native: { flex: 1 },
      default: { display: 'flex', flexGrow: 1, minHeight: 'calc(100vh - 64px)' },
    }),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    margin: spacing(2),
  },
  processButton: {
    margin: spacing(1),
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

const taskChipIcons = {
  [taskStatuses.NOT_STARTED]: 'clock-alert-outline',
  [taskStatuses.TODO]: 'av-timer',
  [taskStatuses.IN_PROGRESS]: 'clock-outline',
  [taskStatuses.DONE]: 'check-circle-outline',
  [taskStatuses.ERROR]: 'alert-circle-outline',
  [taskStatuses.ABORTED]: 'progress-close',
  [taskStatuses.VALIDATED]: 'check',
};

const REFRESH_INTERVAL = 3000;

export default () => {
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();

  const { inspectionId } = route.params;

  const { isLoading, refresh } = useRequest(getOneInspectionById({ id: inspectionId }));

  const inspectionEntities = useSelector(selectInspectionEntities);
  const imagesEntities = useSelector(selectImageEntities);
  const damagesEntities = useSelector(selectDamageEntities);
  const partsEntities = useSelector(selectPartEntities);
  const tasksEntities = useSelector(selectTaskEntities);
  const vehiclesEntities = useSelector(selectVehicleEntities);

  const { inspection } = denormalize({ inspection: inspectionId }, {
    inspection: inspectionsEntity,
    images: [imagesEntity],
    damages: [damagesEntity],
    tasks: [tasksEntity],
    vehicles: [vehiclesEntity],
  }, {
    inspections: inspectionEntities,
    images: imagesEntities,
    damages: damagesEntities,
    parts: partsEntities,
    tasks: tasksEntities,
    vehicles: vehiclesEntities,
  });

  const partsWithDamages = usePartDamages(inspection?.damages, inspection?.parts);

  const [fakeActivity] = useFakeActivity(isLoading);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isPreviewDialogOpen, setPreviewDialogOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState({});

  const { request: handleDelete } = useRequest(
    deleteOneInspection({ id: inspectionId }),
    { onSuccess: () => {
      setDialogOpen(false);
      navigation.navigate(LANDING);
    } },
    false,
  );

  // last damage detection task in the current inspection
  const lastDamageDetectionTask = useMemo(() => {
    const allDamageDetectionTasks = inspection?.tasks?.filter((task) => task?.name === 'damage_detection');
    return allDamageDetectionTasks?.find((_, i) => i === allDamageDetectionTasks?.length - 1);
  }, [inspection]);

  const taskInProgress = lastDamageDetectionTask?.status === taskStatuses.IN_PROGRESS;

  const delay = taskInProgress ? REFRESH_INTERVAL : null;
  useInterval(refresh, delay);

  const handleShowDamages = useCallback(() => {
    navigation.navigate(DAMAGES, { inspectionId });
  }, [inspectionId, navigation]);

  const openDeletionDialog = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const handleDismissDialog = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const handleGoToTaskRead = useCallback(
    (args) => navigation.navigate(TASK_READ, { ...args, inspectionId }),
    [navigation, inspectionId],
  );

  const handleGoToDamageRead = useCallback(
    (payload) => navigation.navigate(DAMAGE_READ, payload),
    [navigation],
  );

  const handleExportPdf = useCallback(() => {}, []);
  const handleGoToEditInspection = useCallback(() => {
    navigation.navigate(INSPECTION_UPDATE, { inspectionId });
  }, [navigation, inspectionId]);

  const openPreviewDialog = useCallback((image) => {
    setPreviewImage(image);
    setPreviewDialogOpen(true);
  }, []);

  const handleDismissPreviewDialog = useCallback(() => {
    setPreviewDialogOpen(false);
  }, []);

  const menuItems = useMemo(() => [
    { title: 'Refresh', loading: Boolean(fakeActivity), onPress: refresh, icon: 'refresh', disabled: Boolean(taskInProgress) },
    { title: 'Update', onPress: handleGoToEditInspection, icon: 'file-document-edit' },
    { title: 'Export as PDF', onPress: handleExportPdf, icon: 'pdf-box', disabled: true },
    { title: 'Delete', onPress: openDeletionDialog, icon: 'trash-can', divider: true },
  ], [fakeActivity, handleExportPdf, handleGoToEditInspection,
    openDeletionDialog, refresh, taskInProgress]);

  const damageButtonTitle = useMemo(() => {
    if (taskInProgress) { return 'In progress...'; }
    if (isEmpty(partsWithDamages)) { return 'No damage'; }
    return `${partsWithDamages.length} damage${partsWithDamages.length > 1 ? 's' : ''}`;
  }, [partsWithDamages, taskInProgress]);

  useLayoutEffect(() => {
    if (navigation) {
      navigation?.setOptions({
        title: isEmpty(inspection) ? `Inspection #${inspectionId.split('-')[0]}` : (
          `${inspection?.vehicle?.brand || 'Brand'} ${inspection?.vehicle?.model || 'Model'} ${moment(inspection?.createdAt).format('lll')}`
        ),
        headerTitle: () => (
          <Appbar.Content
            color={theme.colors.text}
            style={{ justifyContent: 'center' }}
            title={`${inspection?.vehicle?.brand || 'Brand'} ${inspection?.vehicle?.model || 'Model'}`}
            subtitle={moment(inspection?.createdAt).format('lll')}
          />
        ),
        headerBackVisible: false,
        headerLeft: () => (
          <Appbar.BackAction
            accessibilityLabel="Return to inspection"
            onPress={() => navigation.navigate(LANDING)}
          />
        ),
        headerRight: () => (
          <ActionMenu menuItems={menuItems} />
        ),
      });
    }
  }, [theme.colors.text, inspection, inspectionId, menuItems, navigation]);

  if (fakeActivity) {
    return <Loader texts={['Loading the inspection...', 'Swapping time and space...', 'Just count to 10...']} />;
  }

  if (taskInProgress) {
    return <Loader texts={['Calling AI...', 'AI is warming up...', 'Reading damages...', 'Don\'t break your screen yet...', 'Something is coming...']} />;
  }

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Title
            title="Inspection report"
            subtitle={`#${inspectionId}`}
            right={() => (
              <Button
                icon="image-broken-variant"
                onPress={handleShowDamages}
                color={theme.colors.warning}
                style={{ marginRight: spacing(1) }}
                disabled={!partsWithDamages?.length || taskInProgress}
                loading={taskInProgress}
              >
                {damageButtonTitle}
              </Button>
            )}
          />
          {partsWithDamages.map((part) => (
            <PartListSection
              key={`part-${part.id}`}
              onSelectDamage={handleGoToDamageRead}
              {...part}
            />
          ))}
          {!isEmpty(inspection?.tasks) && (
            <ScrollView horizontal>
              {inspection?.tasks.map(({ createdAt, doneAt, id, name, status }) => (
                <Chip
                  key={`taskChip-${id}`}
                  icon={taskChipIcons[status]}
                  onPress={() => handleGoToTaskRead({ taskName: name, taskId: id })}
                  style={{ marginHorizontal: spacing(1), marginVertical: spacing(2) }}
                >
                  {startCase(name)}
                  {' '}
                  {doneAt && createdAt ? `(${moment.duration(moment(doneAt).diff(moment(createdAt))).seconds()}s)` : null}
                </Chip>
              ))}
            </ScrollView>
          )}
          {!isEmpty(inspection?.images) ? (
            <VirtualizedList
              horizontal
              data={inspection?.images}
              initialNumToRender={10}
              keyExtractor={(item, index) => String(index)}
              getItemCount={(d) => d?.length}
              getItem={(items, index) => items[index]}
              style={styles.images}
              renderItem={({ item: image, index }) => (
                <TouchableRipple
                  onPress={() => openPreviewDialog({
                    name: image.name,
                    path: image.path,
                    index,
                  })}
                >
                  <Img
                    style={styles.image}
                    skeletonStyle={styles.image}
                    source={{ uri: image.path }}
                  />
                </TouchableRipple>
              )}
            />
          ) : null}
        </Card>
      </ScrollView>
      <Portal>
        <Dialog
          visible={Boolean(isDialogOpen)}
          onDismiss={handleDismissDialog}
          style={styles.dialog}
        >
          <Dialog.Title style={styles.dialogContent}>
            Are you sure?
          </Dialog.Title>

          <Dialog.Content>
            <Paragraph style={styles.dialogContent}>
              You
              {'\''}
              re about to delete an inspection, there is no going back in this action.
            </Paragraph>
          </Dialog.Content>

          <Dialog.Actions style={styles.dialogActions}>
            <Button onPress={handleDismissDialog} style={styles.button} mode="outlined">
              Cancel
            </Button>
            <Button
              color={theme.colors.error}
              style={styles.button}
              onPress={handleDelete}
              mode="contained"
              icon={isLoading ? undefined : 'trash-can'}
              labelStyle={{ color: 'white' }}
              loading={isLoading}
              disabled={isLoading}
            >
              Delete
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      {!isEmpty(inspection?.images) && (
        <ImageViewer
          isOpen={isPreviewDialogOpen}
          images={inspection?.images.map((i) => ({ url: i.path }))}
          index={previewImage.index}
          handleDismiss={handleDismissPreviewDialog}
        />
      )}
    </SafeAreaView>
  );
};
