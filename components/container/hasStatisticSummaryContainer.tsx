import StatisticSummary from 'components/statistic/statisticSummary';
import { ReactNode } from 'react';

type MainProps = {
  main: ReactNode;
};

const HasStatisticSummaryContainer = ({ main }: MainProps) => {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-4">
      <div className="justify-center lg:col-span-2 lg:flex lg:flex-col lg:items-center">
        {main}
      </div>
      <div className="col-span-1 hidden rounded-lg bg-white shadow-3xl lg:block">
        <StatisticSummary />
      </div>
    </div>
  );
};

export default HasStatisticSummaryContainer;
