import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

import { GalImg, GalItem } from './ImageGalleryItem.styled';
export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = event => {
    this.setState({ isModalOpen: true });
  };
  closeModal = event => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { photoPreviewUrl, tags, photoUrl } = this.props;
    return (
      <GalItem className="gallery-item">
        <GalImg onClick={this.openModal} src={photoPreviewUrl} alt={tags} />
        {this.state.isModalOpen && (
          <Modal photoUrl={photoUrl} tags={tags} onClose={this.closeModal} />
        )}
      </GalItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  photoPreviewUrl: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
