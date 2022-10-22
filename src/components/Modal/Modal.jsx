import React from 'react';
import { ModalWindow, Overlay } from './Modal.styled';

export const Modal = ({ photoUrl, user, onClose }) => {
  return (
    <Overlay
      onClick={event => {
        onClose(event);
        console.log(event);
      }}
      onKeyUp={event => {
        console.log(event);
        onClose(event);
      }}
    >
      <ModalWindow onClick={e => e.stopPropagation()}>
        <img src={photoUrl} alt={user} />
      </ModalWindow>
    </Overlay>
  );
};
