import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {DocumentPicker} from '../components/DocumentPicker/DocumentPicker';

/**
 * Mostly testing the image picker functionality (currently dev sandbox)
 * TODO: Further extend this
 */
export const UploadScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DocumentPicker />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
});
