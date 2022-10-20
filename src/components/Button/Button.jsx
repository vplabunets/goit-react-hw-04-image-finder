import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ buttonText }) => {
  return (
    <>
      <Btn type="button">{buttonText}</Btn>
    </>
  );
};
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
