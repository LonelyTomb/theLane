import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Modal, Card, Spinner} from '@ui-kitten/components';

const LoadingOverlay = (status) => {
  return (
    <Layout>
      <Modal visible={status} backdropStyle={styles.backDrop}>
        {/*<Card>*/}
        <Spinner status="primary" size="giant" />
        {/*</Card>*/}
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
