import React from 'react';
import {Image} from 'react-native';
import {Layout, Text, StyleService} from '@ui-kitten/components';

const HeadlinesCard = ({article}) => {
  const styles = StyleService.create({
    layout: {
      borderRadius: 10,
      borderWidth: 1,
      overflow: 'hidden',
      borderColor: '#c6c6c6',
      marginBottom: 20,
    },
    container: {
      padding: 10,
    },
    image: {
      // borderTopRightRadius: 10,
      // borderTopLeftRadius: 10,
      width: '100%',
      height: 250,
    },
    title: {
      fontWeight: '600',
    },
    content: {},
  });
  return (
    <Layout style={styles.layout}>
      <Image style={styles.image} source={{uri: article.urlToImage}} />
      <Layout style={styles.container}>
        <Text style={styles.title} category={'h5'}>
          {article.title}
        </Text>
        <Text style={styles.content} category={'p1'}>
          {article.description}
        </Text>
      </Layout>
    </Layout>
  );
};

export default HeadlinesCard;
