import { useEffect, useRef } from 'react';

import BottomSheetContainer from 'components/container/bottomSheetContainer';
import CenterModalContainer from 'components/container/centerModalContainer';
import CreateHabitTemplate from 'components/habit/createHabitTemplate';

import useModal from 'customs/useModal';
import useOutsideClick from 'customs/useOutsideClick';
import useWindowSize from 'customs/useWindowSize';

const CreateHabitModal = () => {
  const { type } = useWindowSize();
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, () => {
    closeModal({ element: <CreateHabitModal /> });
  });
  const { closeModal } = useModal();

  return (
    <div ref={modalRef}>
      {type === 'lg' ? (
        <CenterModalContainer>
          <CreateHabitTemplate />
        </CenterModalContainer>
      ) : (
        <BottomSheetContainer>
          <CreateHabitTemplate />
        </BottomSheetContainer>
      )}
    </div>
  );
};

export default CreateHabitModal;
