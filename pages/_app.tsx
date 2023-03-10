import 'styles/globals.css';
import type { AppProps } from 'next/app';

import { SessionProvider } from 'next-auth/react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import Spinner from 'components/common/spinner';
import AsyncBoundary from 'components/error/asyncBoundary';
import ErrorAlert from 'components/error/errorAlert';
import Modal from 'components/modal/modal';
import ModalProvider from 'components/modal/modalProvider';
import Navigator from 'components/navigator/navigator';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: true,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider
      session={pageProps.session}
      // basePath 수정 필요
      basePath="http://localhost:3000/api/auth"
    >
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ModalProvider>
            <AsyncBoundary
              pendingFallback={<Spinner />}
              rejectedFallback={({ error, reset }) => (
                <ErrorAlert error={error} reset={reset} />
              )}
            >
              <Navigator />
              <Component {...pageProps} />
              <Modal />
            </AsyncBoundary>
          </ModalProvider>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}
