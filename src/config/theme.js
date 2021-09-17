import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const SPACING_BASE = Constants.manifest.extra.APP_SPACING_BASE || 8;
const nativeSpacing = (spacingFactor = 1) => SPACING_BASE * spacingFactor;
const defaultSpacing = (spacingFactor) => `${nativeSpacing(spacingFactor)}px`;

export const spacing = Platform.select({
  native: nativeSpacing,
  default: defaultSpacing,
});

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: Constants.manifest.extra.APP_COLOR,
    accent: Constants.manifest.extra.APP_ACCENT_COLOR,
    success: '#5ccc68',
    warning: '#ff9800',
    error: '#fa603d',
    info: '#bbbdbf',
  },
  spacing,
};

export default theme;
