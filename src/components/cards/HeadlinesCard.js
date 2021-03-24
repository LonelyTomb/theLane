import React from 'react';
import {Image} from 'react-native';
import {Layout, Text, StyleService} from '@ui-kitten/components';
import {DateTime} from 'luxon';

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
    content: {
      marginBottom: 5,
    },
    footer: {
      text: {
        color: '#c6c6c6',
      },
    },
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
        <Layout style={styles.footer}>
          <Text style={styles.footer.text}>
            {DateTime.fromISO(article.publishedAt).toFormat('DDD')}
          </Text>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HeadlinesCard;
