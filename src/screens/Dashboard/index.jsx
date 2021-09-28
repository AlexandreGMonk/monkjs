import React from 'react';
import ScreenView from 'screens/ScreenView';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import { spacing } from 'config/theme';

import inspectionCover from './covers/inspections.jpg';

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing(2),
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
});

export default function Dashboard() {
  const navigation = useNavigation();

  return (
    <ScreenView>
      <Card style={styles.card}>
        <Card.Cover source={inspectionCover} />
        <Card.Title
          title="Inspections"
          subtitle="No pending task for now"
          left={(props) => <Avatar.Icon {...props} icon="camera-image" />}
        />
        <Card.Actions style={styles.cardActions}>
          <Button onPress={() => navigation.navigate('Inspections')}>See all</Button>
        </Card.Actions>
      </Card>
    </ScreenView>
  );
}