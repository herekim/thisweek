import CreateButton from 'components/button/createButton';
import BottomFixedContainer from 'components/container/bottomSheetContainer';
import MainContainer from 'components/container/mainContainer';
import CreateHabit from 'components/modal/createHabitModal';
import Pencel from 'components/svgs/pencel.svg';
import CurrentData from 'components/title/dateTitle';
import Title from 'components/title/title';

import useModal from 'customs/useModal';
import useWindowSize from 'customs/useWindowSize';

import { HABIT_TITLE } from 'constants/title/habitTitle';

const Habit = () => {
  const { openModal } = useModal();
  const { type } = useWindowSize();

  return (
    <div className="">
      <MainContainer>
        <div className="pb-4 lg:pb-10">
          <CurrentData />
        </div>
        <div className="lg:flex lg:flex-col lg:items-center">
          <div>
            <Title text={HABIT_TITLE[type]} />
            <div className="hidden lg:block">
              <div className="flex justify-end pt-2">
                <button onClick={() => openModal({ element: <CreateHabit /> })}>
                  <Pencel width="25px" fill="#808080" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <BottomFixedContainer>
            <div className="flex h-24 w-full items-center">
              <CreateButton
                onClick={() => openModal({ element: <CreateHabit /> })}
              />
            </div>
          </BottomFixedContainer>
        </div>
      </MainContainer>
    </div>
  );
};

export default Habit;
