import React, { Component } from 'react';
import { toast } from 'react-toastify';

import {
  SearchBarS,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
export class Searchbar extends Component {
  state = {
    querry: '',
  };

  handleChange = evt => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value.toLowerCase(),
    });
    console.log(this.state.querry);
  };
  handleSubmit = evt => {
    if (this.state.querry.trim() === '') {
      toast.error('Please input correct querry');
      return;
    }
    evt.preventDefault();
    this.props.onSubmit(this.state.querry);
    this.setState({ querry: '' });
  };

  render() {
    return (
      <SearchBarS>
        <SearchForm name="xxx" onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <span>Search</span>
          </SearchFormButton>

          <SearchFormInput
            name="querry"
            value={this.state.querry}
            onChange={this.handleChange}
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBarS>
    );
  }
}
