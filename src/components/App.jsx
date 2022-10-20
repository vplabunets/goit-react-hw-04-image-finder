import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
export class App extends Component {
  state = {
    querry: null,
  };
  handleFormSubmit = onSubmit => {
    this.setState({ querry: onSubmit });
    console.log();
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery querry={this.state.querry} />
        <Button buttonText={'Load more'} />
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}
