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

const Info = ({callback}) => {
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
    appName: {
      fontWeight: 'bold',
      fontSize: 36,
    },
    welcomeSubText: {
      color: 'grey',
      fontSize: 14,
      width: '60%',
    },
    logoWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: '20%',
    },
    logo: {
      backgroundColor: '#FFFFFF',
      width: 45,
      height: 45,
      borderRadius: 10,
      elevation: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoIcon: {
      width: 25,
      height: 25,
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
        <Layout style={styles.logoWrapper}>
          <Layout style={styles.logo}>
            <Icon
              style={styles.logoIcon}
              name={'droplet'}
              pack={'eva'}
              fill={theme['color-primary-400']}
            />
          </Layout>
        </Layout>
        <Text style={styles.welcomeText} category={'p1'}>
          Learn about new features in the application
        </Text>
        <Text style={styles.welcomeSubText} category={'s1'}>
          The application you are using develops all the time. Follow change is
          easy - we will inform you
        </Text>
      </Layout>
    </SafeAreaView>
  );
};

export default Info;
