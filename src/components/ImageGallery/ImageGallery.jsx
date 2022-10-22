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
  state = { datalist: null, currentPage: 1, isLoadingGallery: false };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.querry !== this.props.querry) {
      this.setState({ dataList: null });
      try {
        this.setState({ isLoadingGallery: true });
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
        console.log(response.data.hits.length);

        if (!response.data.hits.length) {
          alert('Your querry is not correct. Please, make new querry');
        }
        if (this.state.datalist === null) {
          this.setState({ dataList: response.data.hits });
        }
        this.setState({
          dataList: [...prevState.dataList, ...response.data.hits],
        });
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

  // render() {
  //   const { dataList, isLoadingGallery } = this.state;
  //   if (dataList) {
  //     return { isLoadingGallery } ? (
  //       'isLoadingGallery'
  //     ) : (
  //       <ImageGalleryS>
  //         {/* {isLoadingGallery && <div>dsadas</div>} */}
  //         {dataList.map(({ id, largeImageURL, webformatURL, user }) => (
  //           <ImageGalleryItem
  //             key={id}
  //             photoUrl={largeImageURL}
  //             photoPreviewUrl={webformatURL}
  //             user={user}
  //           />
  //         ))}
  //       </ImageGalleryS>
  //     );
  //   } else {
  //     return;
  //   }
  // }
}
