import {InMemoryCache} from '@apollo/client';
import policies from './policies';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: policies,
    },
  },
});

export default cache;
