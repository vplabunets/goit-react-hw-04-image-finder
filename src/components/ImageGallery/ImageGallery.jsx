import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/';
export class ImageGallery extends Component {
  state = { datalist: null, currentPage: 1 };

  async componentDidUpdate(prevProps, prevState) {
    console.log(this.props);

    if (prevProps !== this.props) {
      try {
        const response = await axios.get('api', {
          params: {
            q: this.props.querry,
            key: '29714079-b64164321d422be07299c5198',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
            page: this.state.currentPage,
          },
        });
        console.log(this.props.querry);
        this.setState({ dataList: response.data.hits });
      } catch (e) {
        console.log(e);
      }
    }
  }
  render() {
    if (this.state.dataList) {
      return (
        <Gallery className="gallery">
          {this.state.dataList.map(({ id, pageURL, previewURL, user }) => (
            <ImageGalleryItem
              key={id}
              photoUrl={pageURL}
              photoPreviewUrl={previewURL}
              user={user}
            />
          ))}
        </Gallery>
      );
    } else {
      return;
    }
  }
}
