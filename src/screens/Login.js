import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Text, Layout, StyleService, useTheme} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';
import {AuthThunks} from '../redux/thunks';
import AuthForm from '../components/onboarding/AuthForm';

const Login = ({navigation}) => {
  const theme = useTheme();
  const {authLogin} = AuthThunks;
  const {isLoggedIn} = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('Home');
    }
  }, [isLoggedIn, navigation]);

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
      <Layout style={styles.layout}>
        <Text style={styles.welcomeText} category={'p1'}>
          Reading on theLane is comfortable if you have an account
        </Text>
        <Text style={styles.welcomeSubText} category={'s1'}>
          Synchronize your bookmarks, history across all devices
        </Text>
        <AuthForm buttonTitle={'Log In'} callback={authLogin} />
      </Layout>
    </SafeAreaView>
  );
};

export default Login;
