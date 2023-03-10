import { useSession } from 'next-auth/react';

import UpdateReviewButton from 'components/button/updateReviewButton';
import WriteReviewButton from 'components/button/writeReviewButton';
import BottomFix from 'components/container/bottomFix';
import Banner from 'components/main/banner';
import CollectionOfReviews from 'components/main/collectionOfReviews';

import { useGetThisWeekReviewQuery } from 'queries/useReviewQuery';

export default function Home() {
  const session = useSession();
  console.log(session);
  const { thisWeekReview, isExist } = useGetThisWeekReviewQuery();
  return (
    <div className="h-full pt-12">
      <Banner />
      <CollectionOfReviews />
      <BottomFix
        button={
          isExist && thisWeekReview && thisWeekReview[0] ? (
            <UpdateReviewButton reviewId={thisWeekReview[0].id} />
          ) : (
            <WriteReviewButton />
          )
        }
      />
    </div>
  );
}
