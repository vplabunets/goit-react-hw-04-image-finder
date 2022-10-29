import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ onClick, buttonText }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = evt => {
    evt.preventDefault();
    onClick(currentPage);
    setCurrentPage({ querry: '' });
  };

  return (
    <>
      <Btn onClick={handleSubmit} type="button">
        {buttonText}
      </Btn>
    </>
  );
};
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
