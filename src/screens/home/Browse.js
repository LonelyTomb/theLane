import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Layout, StyleService, Text, List, Button} from '@ui-kitten/components';
import LoadingOverlay from '../../components/LoadingOverlay';
import {NewsThunks} from '../../redux/thunks';
import TopBar from '../../components/home/TopBar';
import {SafeAreaView} from 'react-native';
import HeadlinesCard from '../../components/cards/HeadlinesCard';

const Browse = () => {
  const dispatch = useDispatch();
  const newsList = useRef(null);

  const [query, setQuery] = useState({sources: null});
  const {loadEverything, loadSources} = NewsThunks;
  const {
    loading,
    everything: {articles},
    sources,
  } = useSelector((state) => state.news);

  useEffect(() => {
    const getSources = async () => {
      await dispatch(loadSources());
    };
    getSources().then();
  }, [dispatch, loadSources]);

  useEffect(() => {
    if (sources && sources.length) {
      setQuery((q) => ({...q, sources: sources[0].id}));
    }
  }, [sources, setQuery]);

  useEffect(() => {
    const getEverything = async () => {
      await dispatch(loadEverything(query));
    };
    if (query.sources) {
      getEverything().then();
    }
  }, [query, loadEverything, dispatch, sources]);

  const styles = StyleService.create({
    safe: {
      flex: 1,
    },
    layout: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    listContainerWrapper: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      marginBottom: 10,
    },
    listContainer: {
      paddingHorizontal: 15,
    },
    title: {
      paddingHorizontal: 15,
      marginBottom: 5,
      backgroundColor: 'transparent',
    },
    categoryContainer: {
      backgroundColor: '#FFFFFF',
      marginBottom: 10,
    },
    category: {
      marginRight: 10,
      categoryText: {
        textTransform: 'capitalize',
        color: '#FFFFFF',
      },
    },
  });

  const selectSource = (value) => {
    const payload = {...query};
    if (payload.sources === value) {
      return false;
    } else {
      payload.sources = value;
    }
    setQuery({...payload});
  };

  const renderItem = ({item}) => {
    return <HeadlinesCard article={item} />;
  };

  const renderSources = ({item}) => {
    return (
      <Button
        style={styles.category}
        appearance={'filled'}
        status={query.sources === item.id ? 'success' : 'primary'}
        onPress={() => {
          selectSource(item.id);
        }}>
        <Text style={styles.category.categoryText}>{item.name}</Text>
      </Button>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Layout style={styles.safe}>
        {loading && <LoadingOverlay status={true} />}
        <TopBar />
        <Layout style={styles.layout}>
          <Layout>
            <Text style={styles.title} category={'h4'}>
              Sources
            </Text>
          </Layout>
          <Layout style={styles.categoryContainer}>
            <List
              style={styles.listContainer}
              renderItem={renderSources}
              data={sources}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </Layout>
          {/*<ScrollView nestedScrollEnabled={true}>*/}
          <Layout style={styles.listContainerWrapper}>
            <List
              onContentSizeChange={() => {
                if (articles.length > 0) {
                  newsList.current.scrollToIndex({animated: false, index: 0});
                }
              }}
              ref={newsList}
              style={styles.listContainer}
              renderItem={renderItem}
              data={articles}
            />
          </Layout>
          {/*</ScrollView>*/}
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default Browse;
