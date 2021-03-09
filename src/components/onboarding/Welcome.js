import React from 'react';
import {
  Text,
  TopNavigation,
  Layout,
  StyleService,
  useTheme,
} from '@ui-kitten/components';
import {SafeAreaView, TouchableOpacity} from 'react-native';

const Welcome = ({skipCallback}) => {
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
      color: theme['color-primary-600'],
      width: '75%',
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

  return (
    <SafeAreaView style={styles.safe}>
      <TopNavigation
        headerTransparent={true}
        style={styles.header}
        headerStyle={styles.header}
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
          Hello, this is your news app
        </Text>
        <Text
          style={{...styles.welcomeText, ...styles.appName}}
          category={'h1'}>
          theLane
        </Text>
        <Text style={styles.welcomeSubText} category={'s1'}>
          Don't forget to update a lot of cool things ahead
        </Text>
      </Layout>
    </SafeAreaView>
  );
};

export default Welcome;
