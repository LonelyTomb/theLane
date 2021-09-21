import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Layout, Text, StyleService, Icon} from '@ui-kitten/components';
import {DateTime} from 'luxon';
import OpenUrl from '../OpenUrl';

const HeadlinesCard = ({article}) => {
  const styles = StyleService.create({
    layout: {
      borderRadius: 10,
      borderWidth: 1,
      overflow: 'hidden',
      borderColor: '#c6c6c6',
      marginBottom: 20,
      elevation: 3,
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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      text: {
        color: '#c6c6c6',
      },
      icon: {
        width: 25,
        height: 25,
      },
    },
  });
  return (
    <OpenUrl url={article.url}>
      <Layout style={styles.layout}>
        {article.urlToImage && (
          <>
            <Image style={styles.image} source={{uri: article.urlToImage}} />
          </>
        )}
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
            <TouchableOpacity>
              <Icon
                name={'bookmark-outline'}
                pack={'material'}
                style={styles.footer.icon}
              />
            </TouchableOpacity>
          </Layout>
        </Layout>
      </Layout>
    </OpenUrl>
  );
};

export default HeadlinesCard;
