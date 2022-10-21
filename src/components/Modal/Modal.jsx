import React from 'react';
import { ModalWindow, Overlay } from './Modal.styled';

export const Modal = ({ photoUrl, user, onClose }) => {
  return (
    <Overlay
      onClick={() => {
        onClose();
      }}
      className="overlay"
    >
      <ModalWindow onClick={e => e.stopPropagation()}>
        <img src={photoUrl} alt={user} />
      </ModalWindow>
    </Overlay>
  );
};
