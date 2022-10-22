import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import {
  SearchBarS,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = evt => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value.trim().toLowerCase(),
    });
    console.log(this.state.query);
  };
  handleSubmit = evt => {
    if (!this.state.query.trim()) {
      alert('Please input correct query');
      toast.error('Please input correct query', {
        position: 'top-right',

        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      return;
    }
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <>
        <SearchBarS>
          <SearchForm name="xxx" onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit" className="button">
              <span>Search</span>
            </SearchFormButton>

            <SearchFormInput
              name="query"
              value={this.state.query}
              onChange={this.handleChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SearchBarS>
        <ToastContainer width={100} />
      </>
    );
  }
}
