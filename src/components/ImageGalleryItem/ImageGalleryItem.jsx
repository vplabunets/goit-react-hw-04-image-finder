import React, { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { GalImg, GalItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ photoPreviewUrl, tags, photoUrl }) => {
  const [isModalOpen, setiIsModalOpen] = useState(false);
  const openModal = () => {
    setiIsModalOpen(true);
  };
  const closeModal = () => {
    setiIsModalOpen(false);
  };

  return (
    <GalItem className="gallery-item">
      <GalImg onClick={openModal} src={photoPreviewUrl} alt={tags} />
      {isModalOpen && (
        <Modal photoUrl={photoUrl} tags={tags} onClose={closeModal} />
      )}
    </GalItem>
  );
};

ImageGalleryItem.propTypes = {
  photoPreviewUrl: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
