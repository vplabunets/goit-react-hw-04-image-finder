import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalWindow, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onClose);
  }
  componentWillMount() {
    window.removeEventListener('keydown', this.props.onClose);
  }
  render() {
    const { photoUrl, tags, onClose } = this.props;
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
  }
}

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
