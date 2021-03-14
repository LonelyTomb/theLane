import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  Text,
  TopNavigation,
  TopNavigationAction,
  Layout,
  StyleService,
  Icon,
  useTheme,
} from '@ui-kitten/components';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {AuthThunks} from '../../redux/thunks';
import AuthForm from './AuthForm';

const SignUp = ({callback, skipCallback, successCallback}) => {
  const theme = useTheme();
  const {authSignUp} = AuthThunks;
  const {isLoggedIn, error} = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      successCallback();
    }
  }, [error, isLoggedIn, successCallback]);

  const BackIcon = (props) => (
    <Icon {...props} name={'arrow-ios-back-outline'} pack={'eva'} />
  );
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={callback} />
  );

  const styles = StyleService.create({
    safe: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    header: {
      textAlign: 'right',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255,0)',
    },
    layout: {
      flex: 1,
      paddingTop: '20%',
      paddingHorizontal: 15,
      paddingBottom: '20%',
    },
    skipButton: {
      backgroundColor: 'rgba(255,255,255,0)',
      marginRight: 15,
      color: '#C6C6C6',
    },
    welcomeText: {
      color: theme['color-primary-600'],
      width: '75%',
      fontWeight: '600',
      fontSize: 24,
    },
    welcomeSubText: {
      color: 'grey',
      fontSize: 14,
      width: '60%',
      marginBottom: '10%',
    },
  });

  return (
    <SafeAreaView style={styles.safe}>
      <TopNavigation
        headerTransparent={true}
        style={styles.header}
        headerStyle={styles.header}
        accessoryLeft={BackAction}
        accessoryRight={() => {
          return (
            <TouchableOpacity onPress={skipCallback}>
              <Text style={styles.skipButton} category={'p1'}>
                Skip
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <Layout style={styles.layout}>
        <Text style={styles.welcomeText} category={'p1'}>
          Reading on theLane is comfortable if you have an account
        </Text>
        <Text style={styles.welcomeSubText} category={'s1'}>
          Synchronize your bookmarks, history across all devices
        </Text>
        <AuthForm buttonTitle={'Sign Up'} callback={authSignUp} />
      </Layout>
    </SafeAreaView>
  );
};

export default SignUp;
