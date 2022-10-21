import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { AppWrap } from './App.styled';
export class App extends Component {
  state = {
    querry: null,
    currentPage: 1,
  };
  handleFormSubmit = onSubmit => {
    this.setState({ querry: null });
    this.setState({ querry: onSubmit });
  };
  handleLoadMore = onClick => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
    // this.setState({ currentPage: onClick });
    console.log(this.state.currentPage);
  };

  render() {
    return (
      <AppWrap>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          currentPage={this.state.currentPage}
          querry={this.state.querry}
        />
        {this.state.querry && (
          <Button onClick={this.handleLoadMore} buttonText={'Load more'} />
        )}
        <ToastContainer autoClose={5000} />
      </AppWrap>
    );
  }
}
