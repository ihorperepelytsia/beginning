import React, { useState, useEffect } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";

const ImageGallery = ({ listImages }) => {
  const [isModal, setIsModal] = useState(false);
  const [dataset, setDataset] = useState("");
  useEffect(() => {
    window.addEventListener("keydown", closeModal);
    return () => {
      window.removeEventListener("keydown", closeModal);
    };
  }, []);

  const onClickLargeImage = (e) => {
    if (e.target.tagName === "IMG") {
      setIsModal(true);
      setDataset(e.target.dataset.original);
    }
  };
  const closeModal = (e) => {
    if (e.code === "Escape" || e.target.className === "overlay") {
      setIsModal(false);
      setDataset("");
    }
  };
  return (
    <ul className="imageGallery">
      {listImages.length > 0
        ? listImages.map(({ id, largeImageURL, webformatURL }) => (
            <ImageGalleryItem
              key={id}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
              onClick={onClickLargeImage}
            />
          ))
        : ""}
      {isModal && <Modal dataset={dataset} onClick={closeModal} />}
    </ul>
  );
};

ImageGallery.propTypes = {
  listImages: PropTypes.array.isRequired,
};
export default ImageGallery;
