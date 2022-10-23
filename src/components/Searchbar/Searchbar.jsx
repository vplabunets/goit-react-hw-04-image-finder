import React, { Component } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
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
  };
  handleSubmit = evt => {
    if (!this.state.query.trim()) {
      alert('Please, input correct query');
      // toast('Please input correct query', {
      //   position: 'top-right',
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'light',
      // } );
      return;
    }
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    const { query } = this.state.query;
    return (
      <>
        <SearchBarS>
          <SearchForm name="xxx" onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit" className="button">
              <span>Search</span>
            </SearchFormButton>
            <SearchFormInput
              name="query"
              value={query}
              onChange={this.handleChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SearchBarS>
        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
