import { useCallback, useMemo, useState } from 'react';
import { denormalize } from 'normalizr';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {
  createOneInspection, getOneInspectionById, inspectionsEntity, selectInspectionEntities,
  selectTaskEntities, selectVehicleEntities, tasksEntity,
  taskStatuses, updateOneTaskOfInspection, vehiclesEntity,
} from '@monkvision/corejs';
import { useInterval, useFakeActivity, useToggle } from '@monkvision/toolkit';

import useRequest from 'hooks/useRequest';
import { LANDING } from 'screens/names';

const REFRESH_DELAY = 3000;

// createInspection payload
const payload = {
  data: {
    tasks: {
      damage_detection: { status: 'NOT_STARTED' },
      images_ocr: { status: 'NOT_STARTED' },
    },
  },
};

export default function useVin() {
  const navigation = useNavigation();

  const [inspectionId, setInspectionId] = useState(null);
  const [vinPicture, setVinPicture] = useState();

  const [camera, toggleOnCamera, toggleOffCamera] = useToggle();
  const [cameraLoading, toggleOnCameraLoading, toggleOffCameraLoading] = useToggle();
  const [uploading, toggleOnUploading, toggleOffUploading] = useToggle();
  const [guideIsOpen, handleOpenGuide, handleCloseGuide] = useToggle();
  const [errorSnackbar, setErrorSnackbar] = useState([]);

  // add error
  const handleAddErrorSnackbar = useCallback(
    (err) => setErrorSnackbar((prev) => [...prev, err]), [],
  );
  // remove error
  const handleRemoveErrorSnackbar = useCallback(
    (index) => setErrorSnackbar((prev) => prev.filter((_, preIndex) => preIndex !== index)), [],
  );
  // error action
  const handleCloseErrorSnackbar = useCallback(
    (error, index) => {
      handleRemoveErrorSnackbar(index);
      error?.callback?.();
    }, [handleRemoveErrorSnackbar],
  );

  // createInspection callbacks
  const callbacks = {
    onSuccess: ({ result }) => setInspectionId(result),
    onError: () => handleAddErrorSnackbar({
      title: 'Failed to create the inspection, please go back and try again',
      callback: () => navigation.navigate(LANDING) }),
  };

  const {
    isLoading,
    request: createInspection } = useRequest(createOneInspection(payload), callbacks, false);
  const { refresh } = useRequest(getOneInspectionById({ id: inspectionId }), {}, false);

  const vehiclesEntities = useSelector(selectVehicleEntities);
  const tasksEntities = useSelector(selectTaskEntities);
  const inspectionEntities = useSelector(selectInspectionEntities);

  const { inspection } = denormalize({ inspection: inspectionId }, {
    inspection: inspectionsEntity,
    vehicles: [vehiclesEntity],
    tasks: [tasksEntity],
  }, {
    inspections: inspectionEntities,
    vehicles: vehiclesEntities,
    tasks: tasksEntities,
  });

  const vin = inspection?.vehicle?.vin;

  // "vehicle required fields" values from the inspection
  const updateVehicleRequiredFields = {
    marketValue: inspection?.vehicle?.marketValue,
    mileage: inspection?.vehicle?.mileage,
  };

  // last OCR task in the current inspection
  const lastOcrTask = useMemo(() => {
    const allOcrTasks = inspection?.tasks?.filter((task) => task?.name === 'images_ocr');
    return allOcrTasks?.find((_, i) => i === allOcrTasks?.length - 1);
  }, [inspection]);

  // if only the status of the OCR task is done and the vinPicture is present
  // then we hit the refresh after 3sec
  const delay = useMemo(() => {
    if (lastOcrTask?.status !== taskStatuses.DONE && vinPicture) { return REFRESH_DELAY; }
    return null;
  }, [lastOcrTask, vinPicture]);

  useInterval(refresh, delay);

  // ocr payload
  const ocrPayload = { inspectionId, taskName: 'images_ocr', data: { status: taskStatuses.TODO } };
  const {
    request: startOcr,
    isLoading: ocrLoading,
  } = useRequest(updateOneTaskOfInspection(ocrPayload),
    { onSuccess: refresh,
      onError: () => handleAddErrorSnackbar({ title: 'Failed to start OCR task, please try retake the vin picture' }) }, false);

  // we clear the current vinPicture and we proceed to camera to take another one
  // by hiding the navigation header
  const handleOpenVinCameraOrRetake = useCallback(() => {
    if (vinPicture) { setVinPicture(null); }
    navigation?.setOptions({ headerShown: false });
    toggleOnCamera();
  }, [navigation, toggleOnCamera, vinPicture]);

  // we close the camera view and we show the navigation header again
  const handleCloseVinCamera = useCallback(() => {
    navigation?.setOptions({ headerShown: true });
    toggleOffCamera();
  }, [navigation, toggleOffCamera]);

  /**
   * on start the upload we toggle on the uploading state
   * on success we start the ocr task, toggle off the uploading state,
   * and we display the vin picture
   * on error we toggle off the uploading state, and we open the error snackbar
   */
  const handleCapture = useCallback(async (state, api, event) => {
    event.preventDefault();

    const { takePictureAsync, startUploadAsync } = api;
    toggleOnCameraLoading();
    const picture = await takePictureAsync();
    toggleOnUploading();

    try {
      const upload = await startUploadAsync(picture);
      if (upload.data?.id) {
        startOcr();
        setVinPicture(picture.uri);
      }
      handleCloseVinCamera();
      toggleOffCameraLoading();
      toggleOffUploading();
    } catch (error) {
      handleCloseVinCamera();
      toggleOffCameraLoading();
      toggleOffUploading();
      handleAddErrorSnackbar({ title: 'Failed to upload the picture, please try again' });
    }
  }, [handleCloseVinCamera, handleAddErrorSnackbar, startOcr,
    toggleOffCameraLoading, toggleOffUploading, toggleOnCameraLoading, toggleOnUploading]);

  const [inspectionIsLoading] = useFakeActivity(isLoading);
  const [isUploading] = useFakeActivity(uploading);
  const [ocrIsLoading] = useFakeActivity(ocrLoading);

  return {
    status: lastOcrTask?.status,
    vin: { value: vin, picture: vinPicture, setPicture: setVinPicture },
    requiredFields: updateVehicleRequiredFields,
    handleCapture,
    handleOpenVinCameraOrRetake,
    handleCloseVinCamera,
    inspectionIsLoading,
    isUploading,
    ocrIsLoading,
    createInspection,
    setInspectionId,
    inspectionId,
    guide: {
      value: guideIsOpen,
      handleToggleOn: handleOpenGuide,
      handleToggleOff: handleCloseGuide,
    },
    camera: {
      value: camera,
      handleToggleOn: toggleOnCamera,
      handleToggleOff: toggleOffCamera,
      loading: cameraLoading,
    },
    uploading: {
      value: uploading,
      handleToggleOn: toggleOnUploading,
      handleToggleOff: toggleOffUploading,
    },
    errorSnackbar: {
      value: errorSnackbar,
      handleAddErrorSnackbar,
      handleRemoveErrorSnackbar,
      handleCloseErrorSnackbar,
    },
  };
}
