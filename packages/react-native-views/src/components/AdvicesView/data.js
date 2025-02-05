import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './styles';

import brightness from '../../assets/brightness';
import sharpness from '../../assets/sharpness';
import carMask from '../../assets/carMask';

const Label = ({ children }) => <Text style={styles.label}>{children}</Text>;

const items = [
  {
    key: 'Brightness',
    icon: 'brightness-5',
    src: brightness,
    text: (
      <View style={styles.labelLayout}>
        <Label>Make sure that the picture is taken </Label>
        <Label>in a bright enough space</Label>
      </View>
    ),
  },
  {
    key: 'Sharpness',
    icon: 'triangle-outline',
    src: sharpness,
    text: (
      <View style={styles.labelLayout}>
        <Label>Make sure that the picture is clear</Label>
      </View>
    ),
  },
  {
    key: 'Car mask',
    src: carMask,
    text: (
      <View style={styles.labelLayout}>
        <Label>Please follow overlay masks on</Label>
        <Label>the screen to take the pictures in</Label>
        <Label>the right angle</Label>
      </View>
    ),
  },
];

export default items;
