import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchBarS,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    setQuery(evt.currentTarget.value.trim().toLowerCase());
  };
  const handleSubmit = evt => {
    if (!query.trim()) {
      toast.error('Please input correct query');
    }
    evt.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <SearchBarS>
        <SearchForm name="xxx" onSubmit={handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <span>Search</span>
          </SearchFormButton>
          <SearchFormInput
            name="query"
            value={query}
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBarS>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
