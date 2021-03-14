import {Platform, ToastAndroid, Alert} from 'react-native';

const Notify = (text) => {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravity(
      text.toString(),
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  } else {
    Alert.alert('Error', text.toString(), [], {cancelable: true});
  }
};

export default Notify;
