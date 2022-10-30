import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalWindow, Overlay } from './Modal.styled';

export const Modal = ({ onClose, photoUrl, tags }) => {
  useEffect(() => {
    window.addEventListener('keydown', onClose);
    return () => {
      window.removeEventListener('keydown', onClose);
    };
  }, [onClose]);

  return (
    <Overlay
      onClick={event => {
        onClose(event);
      }}
      onKeyUp={event => {
        onClose(event);
      }}
    >
      <ModalWindow onClick={e => e.stopPropagation()}>
        <img src={photoUrl} alt={tags} />
      </ModalWindow>
    </Overlay>
  );
};

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
