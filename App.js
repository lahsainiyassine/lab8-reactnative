import * as React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <WelcomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEFEE',
  },
});
