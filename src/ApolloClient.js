import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new HttpLink({
    uri: process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API
      : 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache(),
});

export default client;
