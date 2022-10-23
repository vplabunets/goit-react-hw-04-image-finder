import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { AppWrap } from './App.styled';
export class App extends Component {
  state = {
    query: '',
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
  };

  handleTotalHits = totalHits => {
    this.setState({ total: totalHits });
  };
  render() {
    const { currentPage, query, dataList, total } = this.state;
    return (
      <AppWrap>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          handleTotalHits={this.handleTotalHits}
          currentPage={currentPage}
          query={query}
          dataList={dataList}
        />
        {total > 12 && (
          <Button onClick={this.handleLoadMore} buttonText={'Load more'} />
        )}
      </AppWrap>
    );
  }
}
