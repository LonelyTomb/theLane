import React, {useCallback} from 'react';
import {TouchableOpacity, Linking} from 'react-native';
import Notify from './Notify';

const OpenUrl = ({url, children}) => {
  const openLink = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Notify('Unable to open Link');
    }
  }, [url]);

  return <TouchableOpacity onPress={openLink}>{children}</TouchableOpacity>;
};
export default OpenUrl;
