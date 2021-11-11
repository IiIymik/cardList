import React, { useEffect} from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer } from './Modal.styled';
import {CloseBtn} from 'components/CloseBtn/CloseBtn';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({onClose, children}) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCross = e => {
    if (e.currentTarget.nodeName === 'BUTTON') {
      onClose();
    }
  }

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer><CloseBtn onClick={handleCross}/>{children}</ModalContainer>
    </Overlay>,
    modalRoot);
}
