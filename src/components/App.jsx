import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { AppWrap } from './App.styled';
export class App extends Component {
  state = {
    query: null,
    currentPage: 0,
    isLoad: false,
    dataList: null,
    total: 0,
  };
  handleFormSubmit = onSubmit => {
    this.setState({ query: onSubmit });
    this.setState({ currentPage: 1 });
  };
  handleLoadMore = onClick => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
    console.log(this.state.currentPage);
  };

  handleTotalHits = totalHits => {
    this.setState({ total: totalHits });
  };
  render() {
    return (
      <AppWrap>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          handleTotalHits={this.handleTotalHits}
          currentPage={this.state.currentPage}
          query={this.state.query}
          dataList={this.state.dataList}
        />
        {this.state.total > 12 && (
          <Button onClick={this.handleLoadMore} buttonText={'Load more'} />
        )}
      </AppWrap>
    );
  }
}
