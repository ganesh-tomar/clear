import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://dev-cleardigital.pantheonsite.io/wp/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export { apolloClient };
