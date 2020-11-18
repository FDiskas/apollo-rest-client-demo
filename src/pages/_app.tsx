import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { apolloClient } from '../gql/client';
import '../styles/main.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient()}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
