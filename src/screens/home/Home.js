import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Layout, StyleService, Text, List} from '@ui-kitten/components';
import LoadingOverlay from '../../components/LoadingOverlay';
import {NewsThunks} from '../../redux/thunks';
import TopBar from '../../components/home/TopBar';
import {SafeAreaView} from 'react-native';
import HeadlinesCard from '../../components/cards/HeadlinesCard';

const Home = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState({country: 'us'});
  const {topHeadlines} = NewsThunks;
  const {loading, headlines, error} = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(topHeadlines(query));
  }, [topHeadlines, dispatch, query]);
  const styles = StyleService.create({
    safe: {
      flex: 1,
    },
    layout: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    listContainer: {
      paddingHorizontal: 15,
    },
  });

  const renderItem = ({item, index}) => {
    return <HeadlinesCard article={item} />;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Layout style={styles.safe}>
        {loading && <LoadingOverlay status={true} />}
        <TopBar />
        <Layout style={styles.layout}>
          <List
            style={styles.listContainer}
            renderItem={renderItem}
            data={headlines.articles}
          />
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default Home;
