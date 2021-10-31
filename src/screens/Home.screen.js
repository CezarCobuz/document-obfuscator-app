import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, Text, View} from 'react-native';

export const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title={'Go to docs wallet'}
        onPress={() => navigation.navigate('DocumentsWalletScreen')}
      />
    </View>
  );
};
