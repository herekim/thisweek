import React, { useContext } from 'react';

import { createPortal } from 'react-dom';

import Dim from 'components/modal/dim';

import { ModalStateContext } from 'contexts/modalContext';

const Modal = () => {
  const openedModal = useContext(ModalStateContext);
  if (openedModal)
    return createPortal(<Dim>{openedModal.element}</Dim>, document.body);
  return <></>;
};

export default Modal;
