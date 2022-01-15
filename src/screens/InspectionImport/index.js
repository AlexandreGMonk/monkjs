import { createOneInspection, Sight, updateOneTaskOfInspection, values } from '@monkvision/corejs';
import { sightMasks, utils } from '@monkvision/react-native';
import { ActivityIndicatorView } from '@monkvision/react-native-views';
import { useNavigation } from '@react-navigation/native';
import { spacing } from 'config/theme';
import { StatusBar } from 'expo-status-bar';

import useRequest from 'hooks/useRequest/index';
import PropTypes from 'prop-types';
import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { ActivityIndicator, Appbar, Button, IconButton, useTheme } from 'react-native-paper';
import { INSPECTION_READ, LANDING } from '../names';
import useImport, { initialPictureData } from './hooks/useImport';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'relative',
  },
  id: { fontFamily: 'monospace' },
  card: {
    marginHorizontal: spacing(2),
    marginVertical: spacing(1),
    minHeight: 200,
  },
  sightCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing(1),
    borderRadius: 22,
    position: 'relative',
    borderWidth: 1.2,
    // backgroundColor: '#F1F3F4',
    margin: 4,
    ...Platform.select({
      web: {
        maxWidth: 170,
        maxHeight: 170,
      },
      native: {
        maxWidth: (width * 0.4) + 14,
        maxHeight: (width * 0.4) + 14,
      },
    }),
    width: '100%',
    height: '100%',
  },
  sightsLayout: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 200,
    position: 'relative',
    margin: -2,
  },
  picture: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
    marginVertical: 4,
    position: 'absolute',
    zIndex: 0,
    opacity: 0.2,
  },
  sightLabel: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 14,
    height: 28,
    zIndex: 99,
  },
  reloadButtonLayout: { position: 'absolute', display: 'flex', flexDirection: 'row', zIndex: 11 },
  reloadButton: { backgroundColor: '#FFF', alignSelf: 'center' },
});

function SightCard({ sight, events }) {
  const { colors } = useTheme();

  const { id, label, uri, isLoading, isFailed } = sight;

  return (
    <TouchableOpacity
      style={[styles.sightCard, {
        borderColor: isFailed ? colors.error : colors.primary,
        borderStyle: uri ? 'solid' : 'dashed',
      }]}
      onPress={() => events.handleOpenMediaLibrary(id)}
      disabled={uri}
      accessibilityLabel={label}
    >

      {/* overlay button */}
      {!isLoading && isFailed ? (
        <View style={styles.reloadButtonLayout}>
          <IconButton
            icon="reload"
            size={24}
            onPress={() => events.handleUploadPicture(uri, id)}
            style={styles.reloadButton}
            color={colors.error}
          />
        </View>
      ) : null}

      {/* overlay button */}
      {!uri ? (
        <View style={styles.reloadButtonLayout}>
          <IconButton
            icon="plus"
            size={24}
            onPress={() => events.handleOpenMediaLibrary(id)}
            style={[styles.reloadButton, { backgroundColor: colors.primary }]}
            color="white"
          />
        </View>
      ) : null}

      {/* sight mask */}
      {!isLoading ? (
        <View style={{ transform: [{ scale: 0.28 }], zIndex: 2, height: 400 }}>
          <SightMask id={id.charAt(0).toUpperCase() + id.slice(1)} height="400" width="500" color={colors.primary} />
        </View>
      ) : null}

      {/* we can try implementing the new Img conponent here for a smooth image rendering */}
      {uri
        ? <Image source={{ uri }} style={styles.picture} />
        : null}

      {/* loading */}
      {isLoading ? <ActivityIndicator color={isFailed ? colors.error : colors.primary} /> : null}

    </TouchableOpacity>
  );
}

SightCard.propTypes = {
  events: PropTypes.shape({
    handleOpenMediaLibrary: PropTypes.func,
    handlePickImage: PropTypes.func,
    handleUploadPicture: PropTypes.func,
  }).isRequired,
  sight: PropTypes.shape({
    id: PropTypes.string,
    isFailed: PropTypes.bool,
    isLoading: PropTypes.bool,
    isUploaded: PropTypes.bool,
    label: PropTypes.string,
    uri: PropTypes.string,
  }).isRequired,
};
const initialInspectionData = { tasks: { damage_detection: { status: 'NOT_STARTED' } } };

export default () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const sights = useMemo(() => Object.values(values.sights.abstract).map((s) => new Sight(...s)),
    []);

  const [pictures, setPictures] = useState(
    sights.map(({ id, label }) => ({ ...initialPictureData, id, label })),
  );
  const [inspectionId, setInspectionId] = useState();

  const canGoNext = useMemo(() => pictures.some((picture) => picture.isUploaded), [pictures]);
  const { isLoading, request: createInspection } = useRequest(
    createOneInspection({ data: initialInspectionData }),
    { onSuccess: ({ result }) => setInspectionId(result) },
    false,
  );

  React.useEffect(() => navigation.addListener('focus', () => {
    setPictures(sights.map(({ id, label }) => ({ ...initialPictureData, id, label })));
    setInspectionId(null);
    createInspection();
  }), [navigation, createInspection, sights]);

  const onSuccess = useCallback(() => {
    navigation.navigate(INSPECTION_READ, { inspectionId });
  }, [inspectionId, navigation]);

  const { isLoading: isUpdating, request: updateTask } = useRequest(
    updateOneTaskOfInspection({
      inspectionId,
      taskName: 'damage_detection',
      data: { status: 'TODO' },
    }),
    { onSuccess },
    false,
  );

  const {
    accessGranted,
    handleOpenMediaLibrary,
    handlePickImage,
    handleRequestMediaLibraryAccess,
    handleUploadPicture,
  } = useImport({ pictures, setPictures, inspectionId });

  useLayoutEffect(() => {
    if (navigation) {
      navigation?.setOptions({
        title: 'Import pictures',
        headerLeft: () => (
          <Appbar.BackAction
            accessibilityLabel="Return to inspection"
            onPress={() => navigation.navigate(LANDING)}
          />
        ),
        headerRight: () => (
          <IconButton
            accessibilityLabel="Start inspection"
            disabled={isUpdating || !canGoNext}
            icon="check"
            color={colors.primary}
            onPress={updateTask}
          />
        ),
      });
    }
  }, [canGoNext, colors.primary, isUpdating, navigation, updateTask]);

  // loading
  if (isLoading) { return <ActivityIndicatorView light />; }

  // no permission given
  if (!accessGranted) {
    return (
      <View style={utils.styles.flex}>
        <Button onPress={handleRequestMediaLibraryAccess}>
          Request access to camera roll
        </Button>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sightsLayout}>
          {pictures.map((sight) => (
            <SightCard
              key={sight.id}
              sight={sight}
              events={{
                handleOpenMediaLibrary,
                handlePickImage,
                handleUploadPicture,
              }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const SightMask = ({ id, ...props }) => (sightMasks?.[id] ? sightMasks[id](props) : null);
