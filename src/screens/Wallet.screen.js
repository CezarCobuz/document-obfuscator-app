import React from 'react';
import {Text, View} from 'react-native';
import CropPicker from '../components/CropPicker/CropPicker';

export const WalletScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Temp v2 demo</Text>
      <CropPicker />
    </View>
  );
};
