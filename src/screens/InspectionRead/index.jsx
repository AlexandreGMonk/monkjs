import Drawing from 'components/Drawing/index';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { denormalize } from 'normalizr';
import moment from 'moment';
import isEmpty from 'lodash.isempty';

import { ActivityIndicatorView, useFakeActivity } from '@monkvision/react-native-views';
import useRequest from 'hooks/useRequest';

import { spacing } from 'config/theme';

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
  vehiclesEntity,
} from '@monkvision/corejs';

import { Image, StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { Card, Button, Dialog, Paragraph, Portal, useTheme } from 'react-native-paper';
import JSONTree from 'react-native-json-tree';
import { DAMAGES } from 'screens/names';

import trash from './assets/trash.svg';

// we can customize the json component by making changes to the theme object
// see more in the docs https://www.npmjs.com/package/react-native-json-tree
const jsonTheme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633',
};

const styles = StyleSheet.create({
  card: {
    margin: spacing(2),
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
    marginHorizontal: spacing(1),
    marginBottom: spacing(1),
  },
  image: {
    width: 200,
    height: 150,
    margin: spacing(1),
  },
  dialog: {
    maxWidth: 450,
    alignSelf: 'center',
    padding: 12,
  },
  dialogDrawing: { display: 'flex', alignItems: 'center' },
  dialogContent: { textAlign: 'center' },
  dialogActions: { width: '100%' },
});

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

  const [fakeActivity] = useFakeActivity(isLoading);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const { request: handleDelete } = useRequest(
    deleteOneInspection({ id: inspectionId }),
    { onSuccess: () => setDialogOpen(false) },
    false,
  );

  const handleShowDamages = useCallback(() => {
    navigation.navigate(DAMAGES, { inspectionId });
  }, [inspectionId, navigation]);

  const handleDismissDialog = useCallback(() => {
    setDialogOpen(false);
  }, []);

  useLayoutEffect(() => {
    if (navigation) {
      navigation?.setOptions({
        title: `Inspection #${inspectionId.split('-')[0]}`,
        headerBackVisible: true,
        headerRight: () => (
          <Button
            icon={fakeActivity ? undefined : 'refresh'}
            onPress={refresh}
            loading={fakeActivity}
            disabled={fakeActivity}
          >
            Refresh
          </Button>
        ),
      });
    }
  }, [fakeActivity, inspectionId, navigation, refresh]);

  if (isLoading) {
    return <ActivityIndicatorView light />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Title
            title={`${inspection.vehicle?.brand} ${inspection.vehicle?.model}`}
            subtitle={`${moment(inspection.createdAt).format('lll')} - ${inspection.vehicle?.vin}`}
          />
          <ScrollView contentContainerStyle={styles.images} horizontal>
            {!isEmpty(inspection.images) ? inspection.images.map(({ name, path }) => (
              <Image key={name} style={styles.image} source={{ uri: path }} />
            )) : null}
          </ScrollView>
          <Card.Content>
            <JSONTree data={{ ...inspection }} theme={jsonTheme} invertTheme={false} />
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <Button
              icon="trash-can"
              color={theme.colors.error}
              onPress={() => setDialogOpen(true)}
            >
              Delete
            </Button>
            <Button onPress={handleShowDamages}>Show damages</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
      <Portal>
        <Dialog
          visible={Boolean(isDialogOpen)}
          onDismiss={handleDismissDialog}
          style={styles.dialog}
        >
          <View style={styles.dialogDrawing}>
            <Drawing xml={trash} width="200" height="120" />
          </View>
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

          <Dialog.Actions>
            <Button onPress={handleDismissDialog} style={styles.dialogActions} mode="outlined">
              Cancel
            </Button>
          </Dialog.Actions>
          <Dialog.Actions>
            <Button
              color={theme.colors.error}
              style={styles.dialogActions}
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
    </SafeAreaView>
  );
};
