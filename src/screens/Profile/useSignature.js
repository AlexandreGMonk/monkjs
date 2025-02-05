import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { config, selectUserEntities, setUserSignature } from '@monkvision/corejs';
import { Platform } from 'react-native';

export default function useSignature({
  signature,
  updateAccountData,
  handleCloseBottomSheet,
}) {
  const store = useStore();
  const dispatch = useDispatch();
  const entities = useSelector(selectUserEntities);

  useEffect(() => {
    updateAccountData({
      signature: {
        isLoading: true,
        uri: null,
      },
    });

    const id = jwtDecode(store.getState().auth.accessToken).sub;
    if (entities && entities[id]?.signature) {
      const reader = new FileReader();
      reader.readAsDataURL(entities[id]?.signature);
      reader.onload = () => {
        updateAccountData({
          signature: {
            isLoading: false,
            uri: reader.result,
          },
        });
      };
      reader.onerror = () => updateAccountData({
        signature: {
          isLoading: false,
          uri: null,
        },
      });
    } else {
      updateAccountData({
        signature: {
          isLoading: false,
          uri: null,
        },
      });
    }
  }, [entities, store, updateAccountData]);

  const handleSubmit = useCallback(() => {
    const id = jwtDecode(store.getState().auth.accessToken).sub;

    const baseParams = {
      id,
      headers: {
        ...config.axiosConfig,
        'Content-Type': 'multipart/form-data',
      },
    };

    const multiPartKeys = {
      image: 'image',
      json: 'json',
      filename: `signature-${id}.png`,
      type: 'image/png',
    };

    const jsonData = JSON.stringify({
      acquisition: {
        strategy: 'upload_multipart_form_keys',
        file_key: multiPartKeys.image,
      },
    });

    fetch(signature.uri)
      .then((res) => res.blob())
      .then((buf) => new File(
        [buf], multiPartKeys.filename,
        { type: multiPartKeys.type },
      ))
      .then((imageFile) => {
        const data = new FormData();
        data.append(multiPartKeys.json, jsonData);
        data.append(multiPartKeys.image, imageFile);

        dispatch(setUserSignature({
          ...baseParams,
          data,
        }))
          .unwrap();
      });
  }, [dispatch, signature, store]);

  const handleSave = useCallback((getUri) => {
    getUri()
      .then(
        (uri) => updateAccountData({
          signature: {
            isLoading: false,
            uri: Platform.OS === 'web' ? uri : uri?.substring(1, uri.length - 1),
          },
        }),
      );
    handleCloseBottomSheet();
  }, [handleCloseBottomSheet, updateAccountData]);

  return {
    handleSubmit,
    handleSave,
  };
}
