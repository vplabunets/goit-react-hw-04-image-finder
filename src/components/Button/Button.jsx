import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export class Button extends Component {
  state = {
    currentPage: 1,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onClick(this.state.currentPage);
    this.setState({ querry: '' });
  };

  render() {
    return (
      <>
        <Btn onClick={this.handleSubmit} type="button">
          {this.props.buttonText}
        </Btn>
      </>
    );
  }
}
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
