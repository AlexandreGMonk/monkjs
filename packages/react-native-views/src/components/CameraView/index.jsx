import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import { Camera, CameraSideBar, Mask, PicturesScrollPreview, utils } from '@monkvision/react-native';
import { View, Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { FAB, Snackbar, Text, useTheme } from 'react-native-paper';

import ActivityIndicatorView from '../ActivityIndicatorView';
import useSights from './useSights';

const styles = StyleSheet.create({
  root: {
    ...Platform.select({
      native: { flex: 1 },
      default: { display: 'flex', flex: 1, height: '100vh' },
    }),
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    backgroundColor: '#000',
    justifyContent: 'space-between',
    ...Platform.select({
      native: { flex: 1 },
      default: { display: 'flex', flex: 1 },
    }),
  },
  fab: {
    backgroundColor: '#333',
  },
  fabImportant: {
    backgroundColor: 'white',
  },
  largeFab: {
    transform: [{ scale: 1.75 }],
  },
  overLaps: {
    ...utils.styles.flex,
    ...utils.styles.getContainedSizes('4:3'),
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  snackBar: {
    display: 'flex',
    backgroundColor: 'white',
    alignSelf: 'center',
    ...Platform.select({
      native: { width: 300 },
    }),
  },
});

/**
 *
 * @param onCloseCamera {func}
 * @param onShowAdvice {func}
 * @param onTakePicture {func}
 * @param onTourEnd {func}
 * @param sights {[Sight]}
 * @returns {JSX.Element}
 * @constructor
 */
export default function CameraView({
  onCloseCamera,
  onShowAdvice,
  onTakePicture,
  onTourEnd,
  sights,
}) {
  // STATE TO PROPS
  const scrollRef = useRef();
  const [fakeActivity, setFakeActivity] = useState(null);
  const [camera, setCamera] = useState();
  const [pictures, setPictures] = useState({});

  const { activeSight, count, nextSightProps } = useSights(sights);

  // PICTURES
  const handleTakePicture = useCallback(async () => {
    if (camera) {
      const options = { quality: 1 };
      const picture = await camera.takePictureAsync(options);

      setPictures((prevState) => ({
        ...prevState,
        [activeSight.id]: {
          sight: activeSight,
          source: picture,
        },
      }));

      onTakePicture(picture, pictures, camera);

      if (!nextSightProps.disabled) {
        nextSightProps.onPress();
      }
    }
  }, [activeSight, camera, nextSightProps, onTakePicture, pictures]);

  // UI
  const { colors } = useTheme();

  const handleShowAdvice = () => {
    onShowAdvice(pictures);
  };

  const handleFakeActivity = useCallback((onEnd = noop) => {
    const fakeActivityId = setTimeout(() => {
      setFakeActivity(null);
      onEnd();
    }, 500);

    setFakeActivity(fakeActivityId);

    return () => { clearTimeout(fakeActivityId); };
  }, []);

  const [visibleSnack, setVisibleSnack] = useState(false);

  const toggleSnackBar = () => setVisibleSnack((prev) => !prev);
  const handleDismissSnackBar = () => setVisibleSnack(false);

  // CAMERA
  const handleCloseCamera = useCallback(() => {
    onCloseCamera(pictures);
  }, [onCloseCamera, pictures]);

  const handleCameraReady = useCallback(setCamera, [setCamera]);

  // EFFECTS
  useEffect(() => {
    handleFakeActivity();
  }, [activeSight.id, handleFakeActivity]);

  useEffect(() => {
    const picturesTaken = Object.values(pictures).filter((p) => Boolean(p.source)).length;
    if (count === picturesTaken) {
      handleFakeActivity(() => onTourEnd(pictures, camera, sights));
    }
  }, [camera, count, handleFakeActivity, onTourEnd, pictures, sights]);

  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <SafeAreaView style={styles.container}>
        <PicturesScrollPreview
          activeSight={activeSight}
          sights={sights}
          pictures={pictures}
          ref={scrollRef}
        />
        <View>
          <Camera onCameraReady={handleCameraReady} />
          <View style={styles.overLaps}>
            {fakeActivity ? <ActivityIndicatorView /> : <Mask id={activeSight.id} />}
          </View>
        </View>
        <CameraSideBar>
          <FAB
            accessibilityLabel="Advices"
            color="#edab25"
            disabled={fakeActivity}
            icon={Platform.OS !== 'ios' ? 'lightbulb-on' : undefined}
            label={Platform.OS === 'ios' ? 'Advices' : undefined}
            onPress={handleShowAdvice}
            small
            style={styles.fab}
          />
          <FAB
            accessibilityLabel="Take a picture"
            disabled={fakeActivity}
            icon="camera-image"
            onPress={handleTakePicture}
            style={[styles.fabImportant, styles.largeFab]}
          />
          <FAB
            accessibilityLabel="Close camera"
            disabled={fakeActivity}
            icon={Platform.OS !== 'ios' ? 'close' : undefined}
            label={Platform.OS === 'ios' ? 'Close' : undefined}
            onPress={toggleSnackBar}
            small
            style={styles.fab}
          />
        </CameraSideBar>
      </SafeAreaView>
      <Snackbar
        visible={visibleSnack}
        onDismiss={handleDismissSnackBar}
        duration={14000}
        style={styles.snackBar}
        action={{
          label: 'Leave',
          onPress: handleCloseCamera,
          color: colors.error,
        }}
      >
        <Text style={{ color: colors.warning }}>
          You are leaving the process, are you sure ?
        </Text>
      </Snackbar>
    </View>
  );
}

CameraView.propTypes = {
  onCloseCamera: PropTypes.func,
  onShowAdvice: PropTypes.func,
  onTakePicture: PropTypes.func,
  onTourEnd: PropTypes.func,
  sights: PropTypes.arrayOf(PropTypes.array),
};

CameraView.defaultProps = {
  onCloseCamera: noop,
  onShowAdvice: noop,
  onTakePicture: noop,
  onTourEnd: noop,
  sights: [
    ['abstractFront', [null, 0, null], 'front'],
    ['abstractFrontRight', [null, 330, null], 'front right'],
    ['abstractFrontLateralRight', [null, 300, null], 'front side right'],
    ['abstractMiddleLateralRight', [null, 270, null], 'middle side right'],
    ['abstractRearLateralRight', [null, 240, null], 'rear side right'],
    ['abstractRearRight', [null, 210, null], 'rear right'],
    ['abstractRear', [null, 180, null], 'rear'],
    ['abstractRearLeft', [null, 150, null], 'rear left'],
    ['abstractRearLateralLeft', [null, 120, null], 'read side left'],
    ['abstractMiddleLateralLeft', [null, 90, null], 'middle side left'],
    ['abstractFrontLateralLeft', [null, 60, null], 'front side left'],
    ['abstractFrontLeft', [null, 30, null], 'front left'],
  ],
};