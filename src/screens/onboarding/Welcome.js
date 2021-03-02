import React from 'react';
import {Text, TopNavigation, Layout, Divider} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet} from 'react-native';

const Welcome = () => {
  return (
    <SafeAreaView>
      <TopNavigation title={'Skip'} style={styles.header} />
      <Layout style={styles.layout}>
        <Text>Welcome</Text>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'right',
  },
  layout: {
    flex: 1,
  },
});
export default Welcome;
