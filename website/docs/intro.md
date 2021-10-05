---
id: intro
title: Main concepts
slug: /
---

Monk's SDK is divided in three main concepts:
1. A **CORE** module providing a redux kit to get and manipulate data 🧿
2. A **COMPONENTS** module exporting basic native features 🧱
3. A **VIEWS** module using core and components together 🚀

## 🧿 Core

**The core is a basic module. It translates calls from your code to Monk's servers.**

> Currently written in _JavaScript_, we are working to provide a core for every popular language that can be requested to execute a query (_EcmaScript, TypeScript, Dart, Python..._).
It accepts a `CLIENT_ID`, a domain name `MONK_DOMAIN` and an `accessToken` as parameters. It follows the _Redux_ pattern and can be combined with your own store and your own middleware.

Once instantiated, the core **provides the APIs** essential to the use of artificial intelligence, but also **hooks** and other **middlewares** specific to front-end development.

``` javascript
/* config/monkCore.js */

import MonkCore from '@monkvision/corejs/src';
import Constants from 'expo-constants';

const monkCore = new MonkCore({
  baseUrl: `https://${Constants.manifest.extra.MONK_DOMAIN}/`,
});

export default monkCore;
```
``` javascript
/* App.jsx */

import monkCore from 'config/monkCore';
import isEmpty from 'lodash.isempty';

// Your own components...
import Loading from 'components/Loading';
import Empty from 'components/Empty';
import Inspection from 'components/Inspection';

const { useGetInspectionsQuery } = monkCore.inspection;

function App() {
  const { data, isLoading } = useGetInspectionsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isEmpty(data)) {
    return <Empty />;
  }

  return data.map((props) => <Inspection {...props) />;
}
```

## 🧱 Components

The React Native component library allows you to build a set of views or modules brick by brick.

> For example, the `CameraView` is composed of the` Camera` and `Gallery` component at the same time,` Camera` accepting as parameters your own capture buttons.

This library is useful if you want to use lower level features or customize your components as you wish, unlike the `react-native-views` library which embeds much more than micro-components.

``` javascript
/* MyCamera.jsx */

import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import { Camera, Gallery } from '@monkvision/react-native';

const styles = StyleSheet.create({
  largeFab: {
    transform: [{ scale: 1.3 }],
  },
});

export default function MyCamera({ onCloseCamera, onTakePicture , onToggleMenu }) {
  const [pictures, setPictures] = useState([]);

  const handleCloseCamera = useCallback(() => {
    onCloseCamera(pictures);
  }, [onCloseCamera, pictures]);

  const handleTakePicture = useCallback(async (camera) => {
    if (camera.ready) {
      setBlackScreen(true);

      const options = { quality: 1 };
      const picture = await camera.ref.takePictureAsync(options);

      setPictures((prevState) => prevState.concat({
        id: 'uniqPartId',
        source: picture,
      }));

      onTakePicture(picture, pictures, camera);
    }
  }, [onTakePicture, pictures]);

  const handleToggleMenu = () => {
    // console.warn('Toggle menu...');
    onToggleMenu(pictures);
  };

  return (
    <Camera
      left={() => <Gallery pictures={pictures} setPictures={setPictures} />}
      right={({ camera }) => (
        <>
          <FAB
            accessibilityLabel="Toggle Menu"
            color="#edab25"
            icon="menu"
            onPress={handleToggleMenu}
            small
          />
          <FAB
            accessibilityLabel="Take picture"
            icon="camera-image"
            onPress={() => handleTakePicture(camera)}
            style={styles.largeFab}
          />
          <FAB
            accessibilityLabel="Close camera"
            icon="close"
            onPress={handleCloseCamera}
            small
          />
        </>
      )}
    />
  );
}

MyCamera.propTypes = {
  onCloseCamera: PropTypes.func,
  onTakePicture: PropTypes.func,
  onToggleMenu: PropTypes.func,
};

MyCamera.defaultProps = {
  onCloseCamera: noop,
  onToggleMenu: noop,
  onTakePicture: noop,
};
```

## 🚀 Views

The `react-native-views` library embeds the features of the previous two. It mixes the server calls with the components in order to provide a very high level development kit.

> Each view globally accepts a panel of callbacks like `onCloseCamera` or` onTakingPicture`. They are however heavier, using `react-native-paper` as the default UI library, which can weigh down your bundle.

The views are all compatible with Android, iOS and Web, unless specified otherwise.

``` javascript
/* MyNavigationScreen.jsx */

import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CameraView } from '@monkvision/react-native-views';

export default function MyNavigationScreen() {
  const navigation = useNavigation();

  const handleCloseCamera = useCallback((/* pictures */) => {
    // console.log(pictures);
    navigation.navigate('HomePage');
  }, [navigation]);

  return (
    <CameraView onCloseCamera={handleCloseCamera} />
  );
}
```

## What's next?

Now that you understand each basic principle, you can install the necessary modules for your own tech stack.
Any request or feedback is welcome. For that, please create an issue on the repository [monkvision/monkjs](https://github.com/monkvision/monkjs/issues/new).
