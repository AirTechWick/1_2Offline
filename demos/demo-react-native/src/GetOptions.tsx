import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  NativeModules,
  NativeEventEmitter,
  Text,
} from 'react-native';

import {
  OptionNameEnum,
  getOptions,
} from 'theta-client-react-native';

const GetOptions = async ({navigation}) => {

  let optionNames: OptionNameEnum[] = [
    OptionNameEnum.Aperture,
    OptionNameEnum.CaptureMode,
    OptionNameEnum.ColorTemperature
  ];


  await getOptions(optionNames)
    .then(option => {
      console.log("Capture Mode: " + option);
    })
    .catch(error => {
      // handle error
    });  



  return (
    <Text>Hello</Text>
  );
};

export default GetOptions;
