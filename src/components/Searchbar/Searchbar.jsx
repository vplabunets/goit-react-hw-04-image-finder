import { Btn } from 'components/Button/Button.styled';
import React from 'react';
import { Component } from 'react';
import { toast } from 'react-toastify';
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
      <header className="searchbar">
        <form name="xxx" className="form" onSubmit={this.handleSubmit}>
          <Btn type="submit" className="button">
            <span className="button-label">Search</span>
          </Btn>

          <input
            name="querry"
            value={this.state.querry}
            onChange={this.handleChange}
            className="input"
            type="text"
            // autocomplete="off"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
