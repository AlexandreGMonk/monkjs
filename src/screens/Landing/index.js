import React, { useCallback, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, SafeAreaView, ScrollView, View, useWindowDimensions } from 'react-native';

import { GETTING_STARTED, INSPECTIONS, PROFILE, INSPECTION_READ, INSPECTION_IMPORT } from 'screens/names';
import theme, { spacing } from 'config/theme';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import moment from 'moment';
import { DataTable, Button, useTheme, Text, Card, IconButton, Menu } from 'react-native-paper';

import { getAllInspections, inspectionStatuses } from '@monkvision/corejs';
import { ActivityIndicatorView, useFakeActivity } from '@monkvision/react-native-views';

import useRequest from 'hooks/useRequest/index';
import useToggle from 'hooks/useToggle/index';

import MonkIcon from 'components/Icons/MonkIcon';
import Placeholder from 'components/Placeholder/index';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  id: { fontFamily: 'monospace' },
  card: {
    marginHorizontal: spacing(2),
    marginVertical: spacing(1),
    minHeight: 200,
  },
  button: {
    margin: spacing(1),
    width: 200,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: spacing(3),
    marginTop: spacing(5),
  },
  statusDot: {
    width: 12,
    maxWidth: 12,
    height: 12,
    borderRadius: 999,
    marginHorizontal: spacing(1),
  },
  statusLayout: {
    display: 'flex', alignItems: 'center',
  },
  activityIndicator: { marginTop: spacing(3) },
});

function StartInspectionMenu({ goToImport, goToCamera }) {
  const [isMenuOpen, handleOpenMenu, handleDismissMenu] = useToggle();

  return (
    <Menu
      anchor={(
        <Button onPress={handleOpenMenu} mode="contained" style={styles.button} icon="file-edit-outline">
          New inspection
        </Button>
)}
      visible={isMenuOpen}
      onDismiss={handleDismissMenu}
    >
      <Menu.Item
        icon="image"
        title="Import pictures"
        onPress={() => { goToImport(); handleDismissMenu(); }}
      />
      <Menu.Item
        icon="camera"
        title="Take pictures"
        onPress={() => { goToCamera(); handleDismissMenu(); }}
      />
    </Menu>
  );
}

StartInspectionMenu.propTypes = {
  goToCamera: PropTypes.func.isRequired,
  goToImport: PropTypes.func.isRequired,
};

export default () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const canRenderStatus = width > 480;

  const handleSignOut = useCallback(() => navigation.navigate(PROFILE), [navigation]);
  const handleStart = useCallback(() => navigation.navigate(GETTING_STARTED), [navigation]);
  const handleList = useCallback(() => navigation.navigate(INSPECTIONS), [navigation]);
  const handleGoToImportInspection = useCallback(
    () => navigation.navigate(INSPECTION_IMPORT), [navigation],
  );

  const {
    response: doneResponse,
    isLoading: doneLoading,
    refresh: refreshDoneInspections,
  } = useRequest(getAllInspections({
    params: {
      inspection_status: inspectionStatuses.DONE,
      limit: 3,
    },
  }));
  const [fakeDoneLoading] = useFakeActivity(doneLoading);

  const {
    response: inProgressResponse,
    isLoading: inProgressLoading,
    refresh: refreshInProgressInspections,
  } = useRequest(getAllInspections({
    params: {
      inspection_status: inspectionStatuses.IN_PROGRESS,
      limit: 3,
    },
  }));
  const [fakeInProgressLoading] = useFakeActivity(inProgressLoading);

  const getInspectionsArray = useCallback((response) => {
    const inspections = response?.entities?.inspections;
    if (!inspections) { return null; }
    return Object.keys(inspections).map((key) => inspections[key]);
  }, []);

  const doneInspections = getInspectionsArray(doneResponse);
  const inProgressInspections = getInspectionsArray(inProgressResponse);

  const handleSubtitles = useCallback((loading, inspectionsLength, status) => {
    if (loading) { return 'Loading...'; }
    if (!inspectionsLength) { return `No inspection ${status} yet`; }
    if (inspectionsLength === 1) { return `The first ${status} inspection`; }
    return `The last ${inspectionsLength} ${status} inspections `;
  }, []);

  const handlePress = useCallback(
    (inspectionId) => {
      navigation.navigate(INSPECTION_READ, { inspectionId });
    },
    [navigation],
  );

  useLayoutEffect(() => {
    if (navigation) {
      navigation?.setOptions({
        title: 'Home',
        headerTitle: () => (
          <MonkIcon
            width={100}
            height={44}
            color={colors.primary}
            style={styles.logo}
            alt="Monk logo"
          />
        ),
        headerRight: () => (
          <Button onPress={handleSignOut} accessibilityLabel="Profile">
            Account
          </Button>
        ),
      });
    }
  }, [colors, handleSignOut, navigation]);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="dark" />
      <ScrollView>
        <Card style={styles.card}>
          <Card.Title
            title="Done inspections"
            subtitle={handleSubtitles(doneLoading, doneInspections?.length, 'done')}
            right={() => (<IconButton onPress={refreshDoneInspections} icon="refresh" color={colors.primary} disabled={fakeDoneLoading} />)}
          />
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title># Key</DataTable.Title>
                <DataTable.Title>Vehicle</DataTable.Title>
                <DataTable.Title>Date</DataTable.Title>
                <DataTable.Title>Status</DataTable.Title>
              </DataTable.Header>

              {/* loading */}
              {fakeDoneLoading ? (
                <View style={styles.activityIndicator}>
                  <ActivityIndicatorView theme={theme} light />
                </View>
              ) : null}

              {/* data */}
              {doneInspections?.length
                && doneInspections.map(({ id, createdAt, vehicle }) => (
                  <DataTable.Row key={`inspectionRow-${id}`} onPress={() => handlePress(id)}>
                    <DataTable.Cell><Text style={styles.id}>{id.split('-')[0]}</Text></DataTable.Cell>
                    <DataTable.Cell>
                      {vehicle?.brand}
                      {` `}
                      {vehicle?.model}
                    </DataTable.Cell>
                    <DataTable.Cell>{moment(createdAt).format('lll')}</DataTable.Cell>
                    <DataTable.Cell style={styles.statusLayout}>
                      {canRenderStatus ? <Text style={{ height: 12 }}>Done</Text> : null}
                      <View>
                        <View style={[styles.statusDot, { backgroundColor: colors.success }]} />
                      </View>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
            </DataTable>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title
            title="In progress inspections"
            subtitle={handleSubtitles(inProgressLoading, inProgressInspections?.length, 'in progress')}
            right={() => (<IconButton onPress={refreshInProgressInspections} icon="refresh" color={colors.primary} disabled={fakeInProgressLoading} />)}
          />
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title># Key</DataTable.Title>
                <DataTable.Title>Vehicle</DataTable.Title>
                <DataTable.Title>Date</DataTable.Title>
                <DataTable.Title>Status</DataTable.Title>
              </DataTable.Header>

              {/* loading */}
              {inProgressLoading ? (
                <View style={styles.activityIndicator}>
                  <ActivityIndicatorView theme={theme} light />
                </View>
              ) : null}

              {/* data */}
              {inProgressInspections?.length
          && inProgressInspections.map(({ id, createdAt, vehicle }) => (
            <DataTable.Row key={`inspectionRow-${id}`} onPress={() => handlePress(id)}>
              <DataTable.Cell><Text style={styles.id}>{id.split('-')[0]}</Text></DataTable.Cell>
              <DataTable.Cell>
                {vehicle?.brand}
                {` `}
                {vehicle?.model}
              </DataTable.Cell>
              <DataTable.Cell>{moment(createdAt).format('lll')}</DataTable.Cell>
              <DataTable.Cell style={styles.statusLayout}>
                {canRenderStatus ? <Text style={{ height: 12 }}>In progress</Text> : null}
                <View>
                  <Placeholder style={styles.statusDot} />
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
            </DataTable>
          </Card.Content>
          <Card.Actions style={styles.actions}>
            <StartInspectionMenu goToImport={handleGoToImportInspection} goToCamera={handleStart} />
            <Button
              onPress={handleList}
              mode="outlined"
              style={[styles.button, { borderColor: colors.primary }]}
              icon="folder-search-outline"
            >
              All inspections
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};