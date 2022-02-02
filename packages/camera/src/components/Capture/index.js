import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import log from '../../utils/log';

import useSettings from '../../hooks/useSettings';
import useSights from '../../hooks/useSights';
import useToggle from '../../hooks/useToggle';
import useUploads, { handleUpload } from '../../hooks/useUploads';

import Camera from '../Camera';
import Controls from '../Controls';
import Layout from '../Layout';
import Overlay from '../Overlay';
import Sights from '../Sights';

import Actions from '../../actions';
import Constants from '../../const';

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: { flex: 1 },
});

/**
 * This is uncontrolled component
 * @param hideReset
 * @param onChange
 * @param onReset
 * @param sightIds
 * @param style
 * @return {JSX.Element}
 * @constructor
 */
export default function Capture({
  buttonCaptureProps,
  buttonFullScreenProps,
  buttonOfflineProps,
  buttonResetProps,
  buttonSettingsProps,
  buttonValidateProps,
  inspectionId,
  onCapture,
  onChange,
  onOffline,
  onReset,
  onSettings,
  onValidate,
  sightIds,
  style,
  withUploads,
}) {
  const [camera, setCamera] = useState();
  const [isReady, setReady] = useState(false);
  const [awaitingPicture, setAwaitingPicture, unsetAwaitingPicture] = useToggle();

  const settings = useSettings();
  const [state, dispatch] = useSights(sightIds);
  const [uploads, uploadsDispatch] = useUploads(sightIds);

  const { current, metadata } = state;
  const overlay = current?.metadata?.overlay || '';

  const title = useMemo(() => {
    if (!current.metadata) { return ''; }
    const { label, id } = current.metadata;

    if (Constants.PRODUCTION) {
      return label;
    }

    return `${label} - ${id}`;
  }, [current]);

  const handleCameraReady = useCallback(() => {
    setReady(true);
    log([`Camera preview has been set`]);
  }, []);

  const handleCapture = useCallback(async () => {
    setAwaitingPicture();

    log([`Awaiting picture to be taken...`]);
    const picture = await camera.takePictureAsync();
    log([`Camera 'takePictureAsync' has fulfilled with picture:`, picture]);

    dispatch({ type: Actions.sights.SET_PICTURE, payload: { id: current.id, picture } });
    dispatch({ type: Actions.sights.NEXT_SIGHT });

    unsetAwaitingPicture();

    onCapture(picture, camera, { current });

    if (withUploads) {
      handleUpload(
        { picture, camera, sights: { current }, inspectionId },
        uploads,
        uploadsDispatch,
        () => {},
      );
    }
  }, [
    camera, current, dispatch,
    inspectionId, onCapture, setAwaitingPicture,
    unsetAwaitingPicture, uploads, uploadsDispatch, withUploads,
  ]);

  useEffect(() => {
    onChange(state);
  }, [onChange, state]);

  useEffect(() => {
    log([`Capture workflow initialized with sights`, metadata]);
    log([`See https://sights.monk.ai?q=${sightIds.join(',')}`]);
  }, [metadata, sightIds]);

  return (
    <View accessibilityLabel="Capture component" style={[styles.container, style]}>
      <Layout
        buttonFullScreenProps={buttonFullScreenProps}
        left={(
          <Sights
            buttonOfflineProps={buttonOfflineProps}
            buttonResetProps={buttonResetProps}
            onOffline={onOffline}
            onReset={onReset}
            {...state}
            dispatch={dispatch}
          />
        )}
        right={(
          <Controls
            buttonCaptureProps={buttonCaptureProps}
            buttonSettingsProps={buttonSettingsProps}
            buttonValidateProps={buttonValidateProps}
            onCapture={handleCapture}
            onSettings={onSettings}
            onValidate={onValidate}
            disabled={awaitingPicture}
          />
        )}
      >
        <Camera
          onRef={setCamera}
          onCameraReady={handleCameraReady}
          title={title}
          {...settings}
        >
          {(isReady && overlay) ? <Overlay svg={overlay} style={styles.overlay} /> : null}
        </Camera>
        {awaitingPicture && <ActivityIndicator />}
      </Layout>
    </View>
  );
}

Capture.propTypes = {
  buttonCaptureProps: PropTypes.objectOf(PropTypes.any),
  buttonFullScreenProps: PropTypes.objectOf(PropTypes.any),
  buttonOfflineProps: PropTypes.objectOf(PropTypes.any),
  buttonResetProps: PropTypes.objectOf(PropTypes.any),
  buttonSettingsProps: PropTypes.objectOf(PropTypes.any),
  buttonValidateProps: PropTypes.objectOf(PropTypes.any),
  inspectionId: PropTypes.string,
  onCapture: PropTypes.func,
  onChange: PropTypes.func,
  onOffline: PropTypes.func,
  onReset: PropTypes.func,
  onSettings: PropTypes.func,
  onValidate: PropTypes.func,
  sightIds: PropTypes.arrayOf(PropTypes.string),
  withCarCoverage: PropTypes.bool,
  withImageQualityCheck: PropTypes.bool,
  withUploads: PropTypes.bool,
};

Capture.defaultProps = {
  buttonCaptureProps: {},
  buttonFullScreenProps: {},
  buttonOfflineProps: { hidden: true },
  buttonResetProps: { hidden: true },
  buttonSettingsProps: { hidden: true },
  buttonValidateProps: { hidden: true },
  inspectionId: null,
  onCapture: () => {},
  onChange: () => {},
  onOffline: () => {},
  onReset: () => {},
  onSettings: () => {},
  onValidate: () => {},
  sightIds: [
    'VGv4m3', // front
    'H12i1w', // front left
    'QtRSGx', // front lateral left
    'uk3vsS', // lateral left
    '0o2lYb', // rear lateral left
    'IO3gpE', // rear left
    '17C0fh', // rear
    'Js1yPM', // rear right
    'OVluNy', // rear lateral right
    'unM2IO', // lateral right
    'AXuZ8H', // front lateral right
    'rVVtgm', // front right
  ],
  withCarCoverage: false,
  withImageQualityCheck: false,
  withUploads: false,
};