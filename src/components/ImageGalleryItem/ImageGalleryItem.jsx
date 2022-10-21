import React from 'react';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { GalImg, GalItem } from './ImageGalleryItem.styled';
export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = event => {
    this.setState({ isModalOpen: true });
    console.log(this.state);
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { photoPreviewUrl, user, photoUrl } = this.props;
    return (
      <GalItem className="gallery-item">
        <GalImg onClick={this.openModal} src={photoPreviewUrl} alt={user} />
        {this.state.isModalOpen && (
          <Modal photoUrl={photoUrl} user={user} onClose={this.closeModal} />
        )}
      </GalItem>
    );
  }
}
