import Dim from 'components/modal/dim';
import { ModalStateContext } from 'contexts/modalContext';
import React, { useContext } from 'react';
import { createPortal } from 'react-dom';

const Modal = () => {
  const openedModal = useContext(ModalStateContext);
  if (openedModal)
    return createPortal(<Dim>{openedModal.element}</Dim>, document.body);
  return <></>;
};

export default Modal;
