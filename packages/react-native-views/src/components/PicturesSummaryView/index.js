import React, { useCallback, useEffect, useMemo, useState } from 'react';
import noop from 'lodash.noop';

import Components, { utils, propTypes } from '@monkvision/react-native';

import { Image, Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { FAB, Provider, Snackbar, Text, withTheme } from 'react-native-paper';
import * as ScreenOrientation from 'expo-screen-orientation';

const styles = StyleSheet.create({
  root: {
    ...utils.styles.flex,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    backgroundColor: '#000',
    justifyContent: 'space-between',
  },
  image: {
    ...utils.styles.getContainedSizes('4:3'),
  },
  next: {
    backgroundColor: 'white',
    transform: [{ scale: 1.5 }],
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
 * @param p {{}}
 * @param onNextPicture {func}
 * @param onSuccess {func}
 * @param sights {[[]]}
 * @param theme
 * @returns {JSX.Element}
 * @constructor
 */
function PicturesSummaryView({
  cameraPictures: p,
  onNextPicture,
  onSuccess,
  sights,
  theme,
}) {
  const { colors } = theme;

  const [visibleSnack, setVisibleSnack] = useState(false);

  const toggleSnackBar = () => setVisibleSnack((prev) => !prev);
  const handleDismissSnackBar = () => setVisibleSnack(false);

  const [activeSightIndex, setActiveSightIndex] = useState(0);

  const [activeSight, activePicture] = useMemo(() => {
    const active = Object.values(p)[activeSightIndex];

    return [active.sight, active.source];
  }, [activeSightIndex, p]);

  const handleNext = useCallback(() => {
    const next = activeSightIndex + 1;

    if (next === sights.length) {
      onSuccess();
    } else {
      if (next === sights.length - 1) {
        toggleSnackBar();
      }

      setActiveSightIndex((prev) => prev + 1);
      onNextPicture(p[next], next, p[activeSightIndex]);
    }
  }, [activeSightIndex, sights.length, onSuccess, onNextPicture, p]);

  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    }

    changeScreenOrientation();

    return () => ScreenOrientation.unlockAsync(ScreenOrientation.Orientation.PORTRAIT_UP);
  }, []);

  return (
    <Provider theme={theme}>
      <StatusBar hidden />
      <SafeAreaView style={styles.root}>
        <Components.PicturesScrollPreview
          activeSight={activeSight}
          pictures={p}
          sights={sights}
          sightWheelProps={{
            theme: { colors: {
              accent: colors.success,
              primary: colors.primary,
            } },
          }}
        />
        <Image
          source={activePicture}
          alt={activeSightIndex.label}
          style={styles.image}
        />
        <Components.CameraSideBar>
          <FAB
            accessibilityLabel="Next"
            disabled={activeSightIndex === p.length - 1}
            icon={Platform.OS !== 'ios' ? 'chevron-right' : undefined}
            label={Platform.OS === 'ios' ? 'Next' : undefined}
            onPress={handleNext}
            style={styles.next}
          />
        </Components.CameraSideBar>
      </SafeAreaView>
      <Snackbar
        visible={visibleSnack}
        onDismiss={handleDismissSnackBar}
        duration={14000}
        style={styles.snackBar}
      >
        <Text style={{ color: colors.success }}>
          You are all set! Next step 👉
        </Text>
      </Snackbar>
    </Provider>
  );
}

PicturesSummaryView.propTypes = {
  cameraPictures: propTypes.cameraPictures.isRequired,
  onNextPicture: propTypes.callback,
  onSuccess: propTypes.onSuccess,
  sights: propTypes.sights.isRequired,
};

PicturesSummaryView.defaultProps = {
  onNextPicture: noop,
  onSuccess: noop,
};

export default withTheme(PicturesSummaryView);
