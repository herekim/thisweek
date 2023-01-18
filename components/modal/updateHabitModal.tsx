import BottomSheetContainer from 'components/container/bottomSheetContainer';
import CenterModalContainer from 'components/container/centerModalContainer';
import UpdateHabitTemplate from 'components/habit/updateHabitTemplate';
import useModal from 'customs/useModal';
import useOutsideClick from 'customs/useOutsideClick';
import useWindowSize from 'customs/useWindowSize';
import { useEffect, useRef } from 'react';

type Props = {
  content: string;
  id: string;
};

const UpdateHabitModal = ({ content, id }: Props) => {
  const { type } = useWindowSize();
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, () => {
    closeModal({ element: <UpdateHabitModal content={content} id={id} /> });
  });
  const { closeModal } = useModal();

  return (
    <div ref={modalRef}>
      {type === 'lg' ? (
        <CenterModalContainer>
          <UpdateHabitTemplate content={content} id={id} />
        </CenterModalContainer>
      ) : (
        <BottomSheetContainer>
          <UpdateHabitTemplate content={content} id={id} />
        </BottomSheetContainer>
      )}
    </div>
  );
};

export default UpdateHabitModal;
