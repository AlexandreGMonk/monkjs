---
id: capture
title: "Capture"
slug: /js/api/components/capture
---

**Interface guiding user in a 360° vehicle capture coverage.**

![npm latest package](https://img.shields.io/npm/v/@monkvision/camera/latest.svg)

```yarn
yarn add @monkvision/camera
```

``` javascript
import { Capture } from '@monkvision/camera';
```

Here an example to upload one image to an inspection on the browser with the task `damage_detection` set.

```javascript
import React, { useCallback, useState } from 'react';
import { Capture, Controls } from '@monkvision/camera';
import { SafeAreaView, StatusBar } from 'react-native';

export default function Inspector({ inspectionId }) {
  const [loading, setLoading] = useState();

  const handleCapture = useCallback(async (state, api, event) => {
    event.preventDefault();
    setLoading(true);

    const { takePictureAsync, startUploadAsync, goNextSight } = api;

    setTimeout(async () => {
      const picture = await takePictureAsync();
      setLoading(false);

      goNextSight();
      startUploadAsync(picture);
    }, 200);
  }, []);

  const controls = [{
    disabled: loading,
    onPress: handleCapture,
    ...Controls.CaptureButtonProps,
  }];

  return (
    <SafeAreaView>
      <StatusBar hidden />
      <Capture
        inspectionId={inspectionId}
        controls={controls}
        loading={loading}
      />
    </SafeAreaView>
  );
}
```

# Props

## controls
`PropTypes.arrayOf(PropTypes.shape({ component: PropTypes.element, disabled: PropTypes.bool, onPress: PropTypes.func }))`

An array of props inherited from `TouchableOpacity|*`

```js
const controls = [{
  disabled: loading,
  onPress: handleCapture,
  ...Controls.CaptureButtonProps,
}];
```

## footer
`PropTypes.element`

A rendered element to be display has footer of the Sights scroll list

## fullscreen
`PropTypes.objectOf(PropTypes.any)`

Props inherited from `Button`

## initialState
`PropTypes.state`

InitialState to begin with. Very useful if you persist the state
on each change from [`onChange`](#onchange) callback.
See the [`state`](#state) section for more details.

## inspectionId
`PropTypes.string`

ID of an inspection if you want to use component's API like [`startUploadAsync`](#startuploadasync).

## loading
`PropTypes.bool`

A boolean showing an ActivityIndicator and disabling controls if true

## navigationOptions
```js
PropTypes.shape({
  allowNavigate: PropTypes.bool,
  allowRetake: PropTypes.bool,
  allowSkip: PropTypes.bool,
  retakeMaxTry: PropTypes.number,
  retakeMinTry: PropTypes.number,
})
```

### allowNavigate
`PropTypes.bool`

A boolean allowing user to navigate between sight. Default is `false`.

### allowRetake
`PropTypes.bool`

A boolean allowing user to retake a picture if not compliant. Default is `true`.

### allowSkip
`PropTypes.bool`

A boolean allowing user to skip a sight if he is not capable of taking it. Default is `false`.

### retakeMaxTry
`PropTypes.number`

A number setting the max limit of retake trys. Default is `1`.

### retakeMinTry
`PropTypes.number`

A number setting the min limit of retake trys. Default is `1`.

> Current scenario is user has to retake at least 1 (`retakeMinTry`) picture,
> but can retake only 1 (`retakeMaxTry`) before being redirected to the next stage,
> only if picture is not compliant to `Image Quality Check` or `Car 360° coverage`.

## onChange
`PropTypes.func`

Will call a function when Component state has changed.

```js
const handleChange = (state, api) => console.log(state);
```

## onReady
`PropTypes.func`

Will call a function when Component camera is ready to be used.

```js
const handleReady = (state, api) => console.log(state);
```

## primaryColor
`PropTypes.string`

Custom color for better user experience (default is white)

## sightIds
`PropTypes.arrayOf(PropTypes.string)`

List of sights in order you want theme to be displayed.
See [monkjs/sights](/monkjs/sights) to choose sights you want.

----

# State and Methods

## state
```js
console.log(state); // { isReady, settings, sights, uploads };
```

### settings
See [Expo Camera Props](https://docs.expo.dev/versions/latest/sdk/camera/#props)

### sights
````js
const sights = useSights(sightIds);
console.log(sights); // { state, distpatch }
console.log(sights.state); // {current: { id, index, metadata }, ids, remainingPictures, takenPictures, tour }
````

### uploads
````js
const uploads = useSights(sightIds);
console.log(uploads); // { state, distpatch }
console.log(uploads.state); // { sightId: { picture: null, status: 'idle', error: null, uploadCount: 0 } }
````

## api
```js
console.log(API); // { camera, goPrevSight, goNextSight, startUploadAsync, takePictureAsync };
```

### camera
See [Expo Camera API](https://docs.expo.dev/versions/latest/sdk/camera/)

### goPrevSight
Dispatch action to return to the previous Sight in the `sightIds` prop order

### goNextSight
Dispatch action to go to the next Sight in the `sightIds` prop order

### startUploadAsync
Call a promise starting to upload a picture to Monk API

```js
const uploadResult = await startUploadAsync(picture);
console.log('Upload has succeed!')
```

### takePictureAsync
Call a promise starting to take a picture from the Native or browser camera

```js
setLoading(true);
const { picture } = await takePictureAsync();
console.log('Picture has been taken!')
setLoading(false);

// Don't set Loading to true if you want Async uploads
const uploadResult = await startUploadAsync(picture);
console.log('Upload has succeed!')
```

----

## Style

### controlsContainerStyle
`PropTypes.style`

Style of the control's container (layout side right).

### sightsContainerStyle
`PropTypes.style`

Style of the sight's scroll list container (layout side left).

### thumbnailStyle
`PropTypes.style`

Style of a thumbnail in a sights list.
