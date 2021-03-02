import React from 'react';
import {
  Text,
  TopNavigation,
  Layout,
  Button,
  StyleService,
  useTheme,
} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import BottomNav from '../../components/onboarding/BottomNav';

const Welcome = () => {
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
      fontSize: 20,
    },
    appName: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    welcomeSubText: {
      color: 'grey',
      fontSize: 16,
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
        <BottomNav />
      </Layout>
    </SafeAreaView>
  );
};

export default Welcome;
