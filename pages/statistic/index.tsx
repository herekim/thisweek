import HeaderContainer from 'components/container/headerContainer';
import MainContainer from 'components/container/mainContainer';
import Navigator from 'components/navigator/navigator';
import HabitTable from 'components/statistic/habitTable';
import StatisticFourBoxes from 'components/statistic/statisticFourBoxes';
import WeekActivity from 'components/statistic/weekActivity';
import CurrentData from 'components/title/dateTitle';
import Title from 'components/title/title';

import useWindowSize from 'customs/useWindowSize';

import { STATISTIC_TITLE } from 'constants/title/title';

const Statistic = () => {
  const { type } = useWindowSize();
  return (
    <div className="">
      <MainContainer>
        <HeaderContainer>
          <CurrentData />
          <Title text={STATISTIC_TITLE[type]} />
        </HeaderContainer>
        <main className="py-5">
          <div className="pb-5 text-xl">
            <p className="py-1">
              이번주에 완료한 습관은
              <strong className="text-2xl font-bold"> 52개</strong>
              예요.
            </p>
            <p className="py-1">
              이번주 목표에 <strong className="text-2xl font-bold"> 70%</strong>
              다다랐어요.
            </p>
            <p className="py-1">
              지난주보다 <strong className="text-2xl font-bold"> 2%</strong>
              잘하고 있어요.
            </p>
          </div>
          <div className="flex flex-col gap-4 py-10 lg:grid lg:grid-cols-2 lg:gap-5">
            <div>
              <StatisticFourBoxes />
            </div>
            <div className="flex flex-col gap-4">
              <WeekActivity />
              <HabitTable />
            </div>
          </div>
        </main>
      </MainContainer>
    </div>
  );
};

export default Statistic;
