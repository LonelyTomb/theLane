import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Layout, StyleService, Text, List, Button} from '@ui-kitten/components';
import LoadingOverlay from '../../components/LoadingOverlay';
import {NewsThunks} from '../../redux/thunks';
import TopBar from '../../components/home/TopBar';
import {SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import HeadlinesCard from '../../components/cards/HeadlinesCard';

const Home = () => {
  const dispatch = useDispatch();
  const newsList = React.createRef();

  const [query, setQuery] = useState({country: 'us'});
  const {topHeadlines} = NewsThunks;
  const {loading, headlines, error, categories} = useSelector(
    (state) => state.news,
  );

  useEffect(() => {
    const getTopHeadlines = async () => {
      await dispatch(topHeadlines(query));
    };
    getTopHeadlines().then();
  }, [topHeadlines, dispatch, query]);

  useEffect(() => {
    const scrollToTop = () => {
      if (!loading && headlines.articles.length > 0 && newsList.current) {
        newsList.current.scrollToIndex({animated: true, index: 0});
      }
    };
    setTimeout(scrollToTop, 1000);
  }, [newsList, headlines, loading]);

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
    },
  });

  const selectCategory = (value) => {
    const payload = {...query};
    if (payload.category === value) {
      delete payload.category;
    } else {
      payload.category = value;
    }
    setQuery({...payload});
  };

  const renderItem = ({item, index}) => {
    return <HeadlinesCard article={item} />;
  };

  const renderCategories = ({item, index}) => {
    return (
      <Button
        style={styles.category}
        appearance={'filled'}
        onPress={() => {
          selectCategory(item);
        }}>
        <Text>{item}</Text>
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
              Categories
            </Text>
          </Layout>
          <Layout style={styles.categoryContainer}>
            <List
              style={styles.listContainer}
              renderItem={renderCategories}
              data={categories}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </Layout>
          {/*<ScrollView nestedScrollEnabled={true}>*/}
          <Layout style={styles.listContainerWrapper}>
            <List
              ref={newsList}
              style={styles.listContainer}
              renderItem={renderItem}
              data={headlines.articles}
            />
          </Layout>
          {/*</ScrollView>*/}
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default Home;
