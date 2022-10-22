import React from 'react';
import { Component } from 'react';
import { ModalWindow, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onClose);
  }
  componentWillMount() {
    window.removeEventListener('keydown', this.props.onClose);
  }
  render() {
    return (
      <Overlay
        onClick={event => {
          this.props.onClose(event);
          console.log(event);
        }}
        onKeyUp={event => {
          console.log(event);
          this.props.onClose(event);
        }}
      >
        <ModalWindow onClick={e => e.stopPropagation()}>
          <img src={this.props.photoUrl} alt={this.props.user} />
        </ModalWindow>
      </Overlay>
    );
  }
}
