import { ReactNode, ReactElement, Suspense } from 'react';

import { QueryErrorResetBoundary } from 'react-query';

import ErrorBoundary from 'components/error/errorBoundary';

type RejectedFallbackProps = {
  error: Error;
  reset: () => void;
};

interface Props {
  pendingFallback: ReactElement;
  rejectedFallback: ({ error, reset }: RejectedFallbackProps) => ReactElement;
  children: ReactNode;
}

const AsyncBoundary = ({
  pendingFallback,
  rejectedFallback,
  children,
}: Props) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackComponent={rejectedFallback}>
          <Suspense fallback={pendingFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default AsyncBoundary;
