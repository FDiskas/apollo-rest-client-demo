import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { apolloClient } from '../gql/client';
import '../styles/main.scss';

const client = apolloClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
