import React, {useEffect, useState} from 'react';
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

const GetOptions = ({ navigation }) => {
  const [optionNames, setOptionNames] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const result = await getOptions([
        OptionNameEnum.CameraControlSource,
        OptionNameEnum.CameraMode,
        OptionNameEnum.PowerSaving,
        OptionNameEnum.CaptureMode,
      ]);

      setOptionNames(JSON.stringify(result));
    };

    fetchOptions();
  }, []);

  return (
    <Text>{optionNames}</Text>
  );
};

export default GetOptions;
