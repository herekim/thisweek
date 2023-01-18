import Spinner from 'components/common/spinner';
import MainContainer from 'components/container/mainContainer';
import AsyncBoundary from 'components/error/asyncBoundary';
import UpdateReviewForm from 'components/review/updateReviewForm';
import CurrentData from 'components/title/dateTitle';

const ReviewUpdate = () => {
  return (
    <div className="">
      <MainContainer>
        <div className="pb-4 lg:pb-10">
          <CurrentData />
        </div>
        <AsyncBoundary
          pendingFallback={<Spinner />}
          rejectedFallback={() => <div>Error</div>}
        >
          <UpdateReviewForm />
        </AsyncBoundary>
      </MainContainer>
    </div>
  );
};

export default ReviewUpdate;
