import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RestLink } from 'apollo-link-rest';
import fetch from 'isomorphic-unfetch';

const restLink = new RestLink({
  uri: process.env.NEXT_PUBLIC_REST_ENDPOINT,
  customFetch: fetch,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.error({ gql: graphQLErrors, fetch: networkError });
});

export function apolloClient() {
  return new ApolloClient({
    ssrMode: false,
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, restLink]),
    connectToDevTools: true,
  });
}
