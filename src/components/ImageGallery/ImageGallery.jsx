import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryS } from 'components/ImageGallery/ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';
// axios.defaults.baseURL = 'https://pixabay.com/';

export class ImageGallery extends Component {
  state = { dataList: null, isLoadingGallery: false, total: 0 };

  async componentDidUpdate(prevProps, prevState) {
    const { currentPage, dataList, handleTotalHits, query } = this.props;
    if (prevProps.currentPage !== currentPage || query !== prevProps.query) {
      try {
        this.setState({ isLoadingGallery: true });
        const response = await axios.get('https://pixabay.com/api', {
          params: {
            q: query,
            key: '29714079-b64164321d422be07299c5198',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
            page: currentPage,
          },
        });
        if (!response.data.hits.length) {
          alert('Your query is not correct. Please, make new query');
        } else if (dataList === null && query !== prevProps.query) {
          this.setState({
            dataList: response.data.hits,
            total: response.data.totalHits,
          });
          handleTotalHits(response.data.totalHits);
        } else {
          this.setState({
            dataList: [...prevState.dataList, ...response.data.hits],
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.setState({ isLoadingGallery: false });
      }
    }
  }
  render() {
    const { dataList, isLoadingGallery } = this.state;
    return (
      <>
        {isLoadingGallery && <Loader />}
        {dataList && (
          <ImageGalleryS>
            {dataList.map(({ id, largeImageURL, webformatURL, user }) => (
              <ImageGalleryItem
                key={id}
                photoUrl={largeImageURL}
                photoPreviewUrl={webformatURL}
                user={user}
              />
            ))}
          </ImageGalleryS>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  currentPage: PropTypes.number.isRequired,
  dataList: PropTypes.array,
  handleTotalHits: PropTypes.func.isRequired,
  query: PropTypes.string,
};
