import React, {useEffect} from 'react';
import {
  Text,
  Layout,
  StyleService,
  Icon,
  useTheme,
  Button,
} from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {UserThunks} from '../redux/thunks';
import LoadingOverlay from '../components/LoadingOverlay';

const Settings = () => {
  const dispatch = useDispatch();
  const {loading, user} = useSelector((state) => state.users);

  const {getUser} = UserThunks;

  useEffect(() => {
    const loadUser = async () => {
      try {
        await dispatch(getUser());
      } catch (error) {
        console.log(error);
      }
    };
    loadUser().then();
  }, [dispatch, getUser]);

  const theme = useTheme();
  const styles = StyleService.create({
    safe: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    layout: {
      flex: 1,
      paddingTop: '20%',
      paddingHorizontal: 15,
      paddingBottom: '20%',
    },
    logoWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: '10%',
      logo: {
        backgroundColor: '#FFFFFF',
        width: 65,
        height: 65,
        borderRadius: 10,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoIcon: {
        width: 45,
        height: 45,
        color: theme['color-primary-400'],
      },
    },
    user: {
      color: theme['color-primary-600'],
      fontWeight: '600',
      textAlign: 'center',
      fontSize: 24,
      marginBottom: 10,
    },
  });

  return (
    <SafeAreaView style={styles.safe}>
      {loading && <LoadingOverlay />}
      <Layout style={styles.layout}>
        <Layout style={styles.logoWrapper}>
          <Layout style={styles.logoWrapper.logo}>
            <Icon
              style={styles.logoWrapper.logoIcon}
              name={'account-circle'}
              pack={'material'}
            />
          </Layout>
        </Layout>
        <Text style={styles.user} category={'p1'}>
          {user}
        </Text>
        <Button>Log Out</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default Settings;
