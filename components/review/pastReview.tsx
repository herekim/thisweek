import Link from 'next/link';

import AllReviewBox from 'components/review/allReviewBox';
import LastMonthReviewBox from 'components/review/lastMonthReviewBox';
import LastWeekReviewBox from 'components/review/lastWeekReviewBox';
import ThisWeekReviewBox from 'components/review/thisWeekReviewBox';

const PastReview = () => {
  return (
    <article className="grid-rows-8 grid w-full grid-cols-2 gap-x-4 gap-y-6 font-medium lg:h-full">
      <Link href="/review/all">
        <div role="button" className="row-span-4">
          <AllReviewBox />
          <p>모두보기</p>
        </div>
      </Link>
      <Link href="/review/lastmonth">
        <div role="button" className="row-span-4 ">
          <LastMonthReviewBox />
          <p>지난달</p>
        </div>
      </Link>
      <div className="row-span-4 ">
        <LastWeekReviewBox />
        <p>지난주</p>
      </div>
      <div className="row-span-4 ">
        <ThisWeekReviewBox />
        <p>이번주</p>
      </div>
    </article>
  );
};

export default PastReview;
