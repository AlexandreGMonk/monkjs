import React, { useCallback, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import useRequests from 'screens/InspectionCreate/useRequests';
import useScreen from 'screens/InspectionCreate/useScreen';

import { Capture, Controls } from '@monkvision/camera';
import ValidationDialog from 'screens/InspectionCreate/ValidationDialog';

export default () => {
  const route = useRoute();
  const { inspectionId } = route.params;

  const screen = useScreen(inspectionId);
  const requests = useRequests(screen);

  const handleSuccess = useCallback(({ camera, pictures }) => {
    camera.pausePreview();
    screen.setTourIsCompleted(true);
    screen.setVisibleDialog(true);
    requests.savePictures.preparePictures(pictures);
  }, [requests.savePictures, screen]);

  const [loading, setLoading] = useState();

  const handleCapture = useCallback(async (state, api, event) => {
    event.preventDefault();
    setLoading(true);

    const {
      takePictureAsync,
      startUploadAsync,
      checkComplianceAsync,
      goNextSight,
    } = api;

    const picture = await takePictureAsync();

    const { sights } = state;
    const { camera } = api;
    const { current, ids, takenPictures } = sights.state;

    if (current.index === ids.length - 1) {
      const upload = await startUploadAsync(picture);
      await checkComplianceAsync(upload.data.id);

      setLoading(false);
      requests.updateTask.request();
      handleSuccess({ camera, pictures: takenPictures });
    } else {
      setLoading(false);
      goNextSight();

      const upload = await startUploadAsync(picture);
      checkComplianceAsync(upload.data.id);
    }
  }, [handleSuccess, requests.updateTask]);

  const controls = [{
    disabled: loading,
    onPress: handleCapture,
    ...Controls.CaptureButtonProps,
  }];

  return (
    <>
      <Capture
        inspectionId={inspectionId}
        controls={controls}
        loading={loading}
      />
      <ValidationDialog
        requests={requests}
        screen={screen}
        inspectionId={inspectionId}
      />
    </>
  );
};
