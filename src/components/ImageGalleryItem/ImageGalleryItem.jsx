import React from 'react';
export const ImageGalleryItem = ({ imagesList }) => {
  return imagesList.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li key={id} className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  ));
};
