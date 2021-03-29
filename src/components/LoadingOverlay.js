import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Modal, Spinner} from '@ui-kitten/components';

const LoadingOverlay = (status = true) => {
  return (
    <Layout>
      <Modal visible={status} backdropStyle={styles.backDrop}>
        <Spinner status="primary" size="giant" />
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  backDrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
export default LoadingOverlay;
