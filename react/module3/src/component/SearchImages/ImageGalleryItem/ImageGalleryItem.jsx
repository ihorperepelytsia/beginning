import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ largeImageURL, webformatURL, onClick }) => (
  <li className="imageGalleryItem">
    <img
      className="imageGalleryItem-image"
      src={webformatURL}
      data-original={largeImageURL}
      onClick={onClick}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
