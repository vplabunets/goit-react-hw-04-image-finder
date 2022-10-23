import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { apiPixabay } from 'api/apiPixabay';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGalleryS } from 'components/ImageGallery/ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = { dataList: null, isLoadingGallery: false, total: 0 };

  async componentDidUpdate(prevProps, prevState) {
    const { currentPage, dataList, handleTotalHits, query } = this.props;
    if (prevProps.currentPage !== currentPage || query !== prevProps.query) {
      try {
        this.setState({ isLoadingGallery: true });
        const response = await apiPixabay(query, currentPage);
        if (!response.data.hits.length) {
          toast.error('Your query is not correct. Please, input new query');
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
        toast.error(
          'Response for you request is not correct. Please, send your request again'
        );
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
            {dataList.map(({ id, largeImageURL, webformatURL, tags }) => (
              <ImageGalleryItem
                key={id}
                photoUrl={largeImageURL}
                photoPreviewUrl={webformatURL}
                tags={tags}
              />
            ))}
          </ImageGalleryS>
        )}
        <ToastContainer
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
        />
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
