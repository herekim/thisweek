import { ModalStateContext, ModalDispatchContext } from 'contexts/modalContext';
import { useState, useMemo } from 'react';

import { ModalStateType } from 'types/modal';
import { ChildrenProps } from 'types/props';

const ModalProvider = ({ children }: ChildrenProps) => {
  const [openedModal, setOpenedModal] = useState<ModalStateType | null>(null);

  const open = ({ element, props }: ModalStateType) => {
    setOpenedModal({ element, props });
  };
  const close = () => {
    setOpenedModal(null);
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalStateContext.Provider value={openedModal}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

export default ModalProvider;
