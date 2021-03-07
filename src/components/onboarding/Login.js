import React, {useState, useEffect} from 'react';
import {
  Text,
  TopNavigation,
  TopNavigationAction,
  Layout,
  StyleService,
  Icon,
  Input,
  Divider,
  Button,
  useTheme,
} from '@ui-kitten/components';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';
import {UserQueries} from '../../apollo/queries';
import {UserMutations} from '../../apollo/mutations';
import {useApolloClient} from '@apollo/client';

const Login = ({callback}) => {
  const theme = useTheme();
  const client = useApolloClient();
  const [form, setForm] = useState({
    email: 'test12@gmail.com',
    password: 'password',
  });
  const [secureText, setSecureText] = useState(true);

  const [login, {loading, error, data}] = useMutation(
    UserMutations.loginUser(),
  );

  const handleChange = (name, value) => {
    setForm({...form, [name]: value});
  };
  const toggleSecureText = () => {
    setSecureText(!secureText);
  };

  useEffect(() => {
    console.log(data);
    if (error) {
      console.log(error);
    }
  }, [data, error, loading]);

  const toggleSecureTextIcon = (props) => (
    <TouchableOpacity onPress={toggleSecureText}>
      <Icon {...props} name={secureText ? 'eye-off' : 'eye'} pack={'eva'} />
    </TouchableOpacity>
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
    authIconsWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 20,
      paddingHorizontal: '15%',
    },
    icon: {
      backgroundColor: '#FFFFFF',
      width: 55,
      height: 50,
      borderRadius: 10,
      elevation: 2,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    iconText: {
      fontSize: 12,
      color: '#c6c6c6',
      textAlign: 'center',
    },
    authIcon: {
      width: 25,
      height: 25,
    },
    input: {
      marginBottom: 5,
    },
    dividerLayout: {
      marginTop: '5%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    divider: {
      width: '45%',
    },
    dividerText: {
      color: 'grey',
      fontSize: 14,
    },
  });
  const BackIcon = (props) => (
    <Icon {...props} name={'arrow-ios-back-outline'} pack={'eva'} />
  );
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={callback} />
  );
  return (
    <SafeAreaView style={styles.safe}>
      <TopNavigation
        headerTransparent={true}
        style={styles.header}
        headerStyle={styles.header}
        accessoryLeft={BackAction}
        accessoryRight={() => {
          return (
            <TouchableOpacity>
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
        <Layout>
          <Input
            value={form.email}
            style={styles.input}
            placeholder={'Enter your email'}
            onChangeText={(e) => {
              handleChange('email', e);
            }}
          />
          <Input
            value={form.password}
            style={styles.input}
            placeholder={'Enter password'}
            onChangeText={(e) => {
              handleChange('password', e);
            }}
            secureTextEntry={secureText}
            accessoryRight={toggleSecureTextIcon}
          />
          <Button
            onPress={async () => {
              try {
                await login({
                  variables: {email: form.email, password: form.password},
                });
              } catch (e) {
                console.log(error);
              }
            }}>
            Sign Up
          </Button>
        </Layout>
        <Layout style={styles.dividerLayout}>
          <Divider style={styles.divider} />
          <Text style={styles.dividerText} category={'p1'}>
            Or
          </Text>
          <Divider style={styles.divider} />
        </Layout>
        <Layout style={styles.authIconsWrapper}>
          <Layout>
            <TouchableOpacity>
              <Layout style={styles.icon}>
                <Icon
                  style={styles.authIcon}
                  name={'google'}
                  pack={'eva'}
                  fill={theme['color-primary-400']}
                />
              </Layout>
            </TouchableOpacity>
            <Text category={'p1'} style={styles.iconText}>
              Gmail
            </Text>
          </Layout>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default Login;
