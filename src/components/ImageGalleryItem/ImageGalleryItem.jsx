import React from 'react';

export const ImageGalleryItem = ({ photoUrl, photoPreviewUrl, user }) => {
  return (
    <li className="gallery-item">
      <img src={photoPreviewUrl} alt={user} />
    </li>
  );
};
