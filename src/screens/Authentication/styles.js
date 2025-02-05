import { StyleSheet, Platform } from 'react-native';
import { utils } from '@monkvision/toolkit';

const { spacing } = utils.styles;
export default StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      native: {
        flex: 1,
      },
      default: {
        display: 'flex',
        minHeight: '100vh',
      },
    }),
  },
  text: {
    marginTop: spacing(2),
  },
  signIn: {
    margin: spacing(3),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing(4),
  },
});
