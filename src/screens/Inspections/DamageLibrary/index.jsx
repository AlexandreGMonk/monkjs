import React, {useCallback, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import { Surface, IconButton, ProgressBar, Text, Colors } from 'react-native-paper';
import * as ScreenOrientation from 'expo-screen-orientation';
import DamageLibraryLeftActionsActions from './Actions/LeftActions';
import CarView from './CarView';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  surface: {
    ...Platform.select({
      native: { flex: 1 },
      default: {
        display: 'flex',
        flex: 1,
      },
    }),
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#E5E5E5',
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    position: 'absolute',
  },
  close: {
    transform: [{ scale: 1.3 }],
    alignSelf: 'center',
  },
  progressContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    paddingHorizontal: 100,
  },
  progressText: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#274B9F',
  },
  progressBar: {
    height: 6,
  },
  helpTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    alignSelf: 'center',
    top: 50,
  },
  helpText: {
    fontSize: 17,
    fontWeight: '400',
    // fontFamily: 'roboto',
  },
});

export default function DamageLibrary() {
  const navigation = useNavigation();
  const unLockScreenAsync = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    await ScreenOrientation.unlockAsync();
  };
  const goBack = () => {
    unLockScreenAsync().then(() => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        navigation.navigate('Inspections');
      }
    });
  };

  useEffect(() => {
    async function lockScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    };
    lockScreenOrientation();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Surface style={styles.surface}>
        <CarView />
        <View style={styles.header}>
          <IconButton
            accessibilityLabel="Cancel"
            icon="close"
            onPress={goBack}
            style={styles.close}
            color={Colors.grey700}
          />
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>70%</Text>
            <ProgressBar progress={0.5} color={Colors.blue300} style={styles.progressBar} />
          </View>
        </View>
        <View style={styles.helpTextContainer}>
          <Text style={styles.helpText}>Click on the vehicle parts to add damage</Text>
        </View>
        <DamageLibraryLeftActionsActions handlePress={() => console.log('pressed')} />
      </Surface>
    </SafeAreaView>
  );
}
