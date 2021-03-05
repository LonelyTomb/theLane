import {ApolloClient, InMemoryCache, ApolloLink} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';
import {API_URL, token_chars} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';

const authRestLink = new ApolloLink((operation, forward) => {
  operation.setContext(async ({headers}) => {
    const token = await EncryptedStorage.getItem(token_chars);
    if (token) {
      return {
        headers: {
          ...headers,
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    }
    return {headers};
  });
  return forward(operation);
});

const restLink = new RestLink({
  uri: API_URL,
  responseTransformer: async (response) =>
    response.json().then(({data}) => data),
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authRestLink, restLink]),
});

export default client;
