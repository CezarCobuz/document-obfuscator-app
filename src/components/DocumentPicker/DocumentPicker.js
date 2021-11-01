import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {DemoButton} from '../DemoButton';
import {DemoResponse} from '../DemoResponse';

const actions = [
  {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    },
  },
  {
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 1,
      // maxHeight: 200,
      // maxWidth: 200,
      mediaType: 'photo',
      includeBase64: false,
    },
  },
];

/**
 * Mostly testing the image picker functionality (currently dev sandbox)
 * TODO: Further extend this
 *
 * Use this + react-native-image-editor --- or --- migrate to https://www.npmjs.com/package/react-native-image-crop-picker
 */
export const DocumentPicker = () => {
  const [response, setResponse] = useState(null);

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  // TODO: Investigate moving this wrapper scroll view in parent
  return (
    <ScrollView>
      <View style={styles.buttonContainer}>
        {actions.map(({title, type, options}) => {
          return (
            <DemoButton
              key={title}
              onPress={() => onButtonPress(type, options)}>
              {title}
            </DemoButton>
          );
        })}
      </View>
      <DemoResponse>{response}</DemoResponse>

      {/* TODO: Investigate if we need multiple documents at the same time  */}
      {response?.assets &&
        response?.assets.map(({uri}) => (
          <View key={uri} style={styles.image}>
            <Image
              resizeMode="cover"
              resizeMethod="scale"
              style={{width: 200, height: 200}}
              source={{uri: uri}}
            />
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },

  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
});
