import React, { Component } from 'react';
import axios from 'axios';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryS } from 'components/ImageGallery/ImageGallery.styled';
axios.defaults.baseURL = 'https://pixabay.com/';
export class ImageGallery extends Component {
  state = { datalist: null, currentPage: 1 };

  async componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    if (prevProps !== this.props) {
      try {
        const response = await axios.get('api', {
          params: {
            q: this.props.querry,
            key: '29714079-b64164321d422be07299c5198',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
            page: this.props.currentPage,
          },
        });
        console.log(this.props.querry);
        if (this.state.datalist === null) {
          console.log(this.state.dataList);
          this.setState({ dataList: response.data.hits });
        }
        this.setState({
          dataList: [...prevState.dataList, ...response.data.hits],
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
  render() {
    if (this.state.dataList) {
      return (
        <ImageGalleryS>
          {this.state.dataList.map(
            ({ id, largeImageURL, webformatURL, user }) => (
              <ImageGalleryItem
                key={id}
                photoUrl={largeImageURL}
                photoPreviewUrl={webformatURL}
                user={user}
              />
            )
          )}
        </ImageGalleryS>
      );
    } else {
      return;
    }
  }
}
