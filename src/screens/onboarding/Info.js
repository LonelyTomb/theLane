import React from 'react';
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
import BottomNav from '../../components/onboarding/BottomNav';

const Info = ({navigation, route}) => {
  const theme = useTheme();
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
      justifyContent: 'center',
      paddingHorizontal: 15,
      paddingBottom: '20%',
    },
    skipButton: {
      backgroundColor: 'rgba(255,255,255,0)',
      marginRight: 15,
      color: '#C6C6C6',
    },
    welcomeText: {
      color: theme['color-primary-400'],
      width: '80%',
      fontSize: 24,
    },
    appName: {
      fontWeight: 'bold',
      fontSize: 36,
    },
    welcomeSubText: {
      color: 'grey',
      fontSize: 14,
      width: '60%',
    },
  });
  const BackIcon = (props) => (
    <Icon {...props} name={'arrow-ios-back-outline'} pack={'eva'} />
  );
  const BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => {
        navigation.goBack();
      }}
    />
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
          Learn about new features in the application
        </Text>
        <Text style={styles.welcomeSubText} category={'s1'}>
          The application you are using develops all the time. Follow change is
          easy - we will inform you
        </Text>
        <BottomNav
          route={route}
          callback={() => {
            navigation.navigate('Welcome');
          }}
        />
      </Layout>
    </SafeAreaView>
  );
};

export default Info;
