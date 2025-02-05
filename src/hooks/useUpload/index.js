import { addOneImageToInspection, config } from '@monkvision/corejs';
import { noop } from 'lodash';
import { useCallback } from 'react';
import { Platform } from 'react-native';
import { useDispatch } from 'react-redux';

export default function useUpload({
  onLoading = noop,
  onSuccess = noop,
  onError = noop,
  inspectionId,
  taskName = 'damage_detection',
}) {
  const dispatch = useDispatch();

  return useCallback(async (uri, id) => {
    if (!inspectionId) {
      return;
    }

    onLoading(id);

    const filename = `${id}-${inspectionId}.jpg`;
    const multiPartKeys = { image: 'image', json: 'json', filename, type: 'image/jpg' };

    const headers = { ...config.axiosConfig, 'Content-Type': 'multipart/form-data' };
    const baseParams = { inspectionId, headers };

    const acquisition = { strategy: 'upload_multipart_form_keys', file_key: multiPartKeys.image };
    const json = JSON.stringify({ acquisition, tasks: [taskName] });

    const data = new FormData();
    data.append(multiPartKeys.json, json);

    if (Platform.OS === 'web') {
      const response = await fetch(uri);
      const blob = await response.blob();
      const file = await new File([blob], multiPartKeys.filename, { type: multiPartKeys.type });
      data.append(multiPartKeys.image, file);
    } else {
      data.append('image', {
        uri,
        name: multiPartKeys.filename,
        type: multiPartKeys.type,
      });
    }

    await dispatch(addOneImageToInspection({ ...baseParams, data })).unwrap()
      .then((res) => onSuccess(id, uri, res))
      .catch((err) => onError(id, err));
  }, [dispatch, inspectionId, onError, onLoading, onSuccess, taskName]);
}
