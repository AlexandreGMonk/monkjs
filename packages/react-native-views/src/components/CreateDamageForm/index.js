import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { flushSync } from 'react-dom';
// import { View } from 'react-native';
import { IconButton, withTheme, Provider as PaperProvider } from 'react-native-paper';
import { noop, startCase } from 'lodash';
import ImageViewer from '../ImageViewer';
import useToggle from '../../hooks/useToggle';

import damageMetadataList from './metadataList';

import DamagesForm from './DamageForm';
import CameraSimpleViewModal from './CameraSimpleViewModal/index';
// import DamagePicker from './DamagePicker';
import useDamagesForm from './useDamagesForm';

function CreateDamageForm({
  theme,
  isOpen,
  onClose,
  currentDamage,
  onChangeCurrentDamage,
  damagePicturesState,
  isDamageValid,
  onSubmit,
  isLoading,
  onCameraOpen,
  onCameraClose,
  onReset,
}) {
  const { colors } = theme;
  const [isCameraViewOpen, openCameraView, closeCameraView] = useToggle();
  const [damagePictures, setDamagePictures] = damagePicturesState;

  const {
    isPreviewDialogOpen,
    selectField,
    setSelectField,
    handleOpenPreviewDialog,
    handleUpdateDamageMetaData,
    handleRemovePicture,
    handleClearDamagePictures,
    previewImage,
    closePreviewDialog,
  } = useDamagesForm({ onChangeCurrentDamage, setDamagePictures });

  const damagePicturesViewer = useMemo(() => ({
    isOpen: isPreviewDialogOpen,
    images: damagePictures?.map((i) => ({ url: i.uri })),
    index: previewImage.index,
    handleDismiss: closePreviewDialog,
    deleteButton:
  <IconButton color={colors.error} onPress={handleRemovePicture} icon={isLoading ? undefined : 'trash-can'} />,
  }), [closePreviewDialog, colors.error, damagePictures,
    handleRemovePicture, isLoading, isPreviewDialogOpen, previewImage.index]);

  // trigger the camera open/close events
  useEffect(() => {
    if (isCameraViewOpen) { onCameraOpen(); } else { onCameraClose(); }
  }, [isCameraViewOpen, onCameraClose, onCameraOpen]);

  // camera view
  if (isCameraViewOpen) {
    return (
      <PaperProvider theme={theme}>
        <CameraSimpleViewModal
          theme={theme}
          setDamagePictures={setDamagePictures}
          closeCameraView={closeCameraView}
          openPreviewDialog={(val) => {
            // close the camera synchronously and then call handleOpenPreviewDialog
            flushSync(() => closeCameraView());
            handleOpenPreviewDialog(val);
          }}
          damagePictures={damagePictures}
          {...damagePicturesViewer}
        />
      </PaperProvider>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <>
        <DamagesForm
          isOpen={isOpen}
          onClose={onClose}
          currentDamage={currentDamage}
          isDamageValid={isDamageValid}
          onSubmit={onSubmit}
          onReset={onReset}
          handleClearDamagePictures={handleClearDamagePictures}
          damagePictures={damagePictures}
          handleOpenPreviewDialog={handleOpenPreviewDialog}
          setSelectField={setSelectField}
          openCameraView={openCameraView}
          data={damageMetadataList[selectField] || []}
          onChange={(value) => handleUpdateDamageMetaData({ [selectField]: value })}
          selectedValue={startCase(currentDamage[selectField])}
        />
        <ImageViewer {...damagePicturesViewer} />
      </>
    </PaperProvider>
  );
}
CreateDamageForm.propTypes = {
  currentDamage: PropTypes.shape({
    damage_type: PropTypes.string,
    part_type: PropTypes.string,
    severity: PropTypes.string,
  }),
  damagePicturesState: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.func]),
  isDamageValid: PropTypes.bool,
  isLoading: PropTypes.bool,
  isOpen: PropTypes.bool,
  onCameraClose: PropTypes.func,
  onCameraOpen: PropTypes.func,
  onChangeCurrentDamage: PropTypes.func,
  onClose: PropTypes.func,
  onReset: PropTypes.func,
  onSubmit: PropTypes.func,

};

CreateDamageForm.defaultProps = {
  currentDamage: {
    part_type: null,
    damage_type: null,
    severity: null,
  },
  onClose: noop,
  onChangeCurrentDamage: noop,
  isOpen: false,
  damagePicturesState: [[], noop],
  isDamageValid: false,
  onSubmit: noop,
  isLoading: false,
  onCameraClose: noop,
  onCameraOpen: noop,
  onReset: noop,
};
export default withTheme(CreateDamageForm);
