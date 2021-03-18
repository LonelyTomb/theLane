import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  Divider,
  Icon,
  Input,
  Layout,
  StyleService,
  Text,
  useTheme,
} from '@ui-kitten/components';
import {TouchableOpacity} from 'react-native';
import Notify from '../Notify';
import LoadingOverlay from '../LoadingOverlay';

const AuthForm = ({callback, buttonTitle}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const styles = StyleService.create({
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

  const [secureText, setSecureText] = useState(true);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const {loading, error} = useSelector((state) => state.auth);

  const handleChange = (name, value) => {
    setForm({...form, [name]: value});
  };
  const toggleSecureText = () => {
    setSecureText(!secureText);
  };

  useEffect(() => {
    if (error) {
      Notify(error);
    }
  }, [error]);

  const toggleSecureTextIcon = (props) => (
    <TouchableOpacity onPress={toggleSecureText}>
      <Icon {...props} name={secureText ? 'eye-off' : 'eye'} pack={'eva'} />
    </TouchableOpacity>
  );
  return (
    <>
      {loading && <LoadingOverlay status={true} />}
      <Layout>
        <Input
          value={form.email}
          style={styles.input}
          placeholder={'Enter your email'}
          onChangeText={(e) => {
            handleChange('email', e);
          }}
          autoCompleteType={'email'}
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
          autoCorrect={false}
        />
        <Button
          onPress={async () => {
            try {
              await dispatch(callback(form));
            } catch (e) {
              // console.log('err', e);
            }
          }}>
          {buttonTitle}
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
    </>
  );
};

export default AuthForm;
