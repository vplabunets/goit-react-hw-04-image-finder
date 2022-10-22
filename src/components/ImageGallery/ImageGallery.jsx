import React, { Component } from 'react';
import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import {
  ImageGalleryS,
  LoaderWrap,
} from 'components/ImageGallery/ImageGallery.styled';
axios.defaults.baseURL = 'https://pixabay.com/';

export class ImageGallery extends Component {
  state = { dataList: null, currentPage: 0, isLoadingGallery: false, total: 0 };

  async componentDidUpdate(prevProps, prevState) {
    console.log('prev', prevProps.query);
    console.log('current', this.props.query);
    if (this.state.currentPage !== this.props.currentPage) {
      // this.setState({ dataList: null });
      this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));

      try {
        this.setState({ isLoadingGallery: true });
        const response = await axios.get('api', {
          params: {
            q: this.props.query,
            key: '29714079-b64164321d422be07299c5198',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
            page: this.props.currentPage,
          },
        });
        // console.log(response.data.hits);

        if (!response.data.hits.length) {
          alert('Your query is not correct. Please, make new query');
        } else if (this.state.dataList === null) {
          this.setState({
            dataList: response.data.hits,
            total: response.data.totalHits,
          });
          this.props.handleTotalHits(response.data.totalHits);
          // console.log('data recorded', this.state.datalist);
          console.log(response.data.hits);
        } else {
          console.log(prevState.dataList);
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
    // console.log('If не працює');
  }
  render() {
    const { dataList, isLoadingGallery } = this.state;

    return (
      <>
        {isLoadingGallery && (
          <LoaderWrap>
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          </LoaderWrap>
        )}
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
