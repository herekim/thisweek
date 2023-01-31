import AsyncBoundary from 'components/error/asyncBoundary';
import ErrorAlert from 'components/error/errorAlert';
import CurrentData from 'components/title/dateTitle';
import Title from 'components/title/title';

import { getRandomInt } from 'lib/calculator';

import { MOTIVATION_TITLE } from 'constants/title/title';

const Banner = () => {
  return (
    <div className="p-6">
      <div className="pb-6">
        <CurrentData />
      </div>
      <AsyncBoundary
        pendingFallback={<div>Loading...</div>}
        rejectedFallback={({ error, reset }) => (
          <ErrorAlert error={error} reset={reset} />
        )}
      >
        <div>
          <div className="h-16 pb-2">
            <Title
              text={MOTIVATION_TITLE[getRandomInt(MOTIVATION_TITLE.length)]}
              typing={true}
            />
          </div>
        </div>
      </AsyncBoundary>
    </div>
  );
};

export default Banner;
