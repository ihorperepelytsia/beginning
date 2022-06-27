import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";

export default class ImageGallery extends Component {
  state = {
    isModal: false,
    dataset: "",
  };
  static propTypes = {
    listImages: PropTypes.array.isRequired,
  };
  onClickLargeImage = (e) => {
    if (e.target.tagName === "IMG") {
      this.setState({
        isModal: true,
        dataset: e.target.dataset.original,
      });
    }
  };
  closeModal = (e) => {
    if (e.code === "Escape") {
      this.setState({
        isModal: false,
        dataset: "",
      });
    }
    if (e.target.tagName !== "IMG") {
      this.setState({
        isModal: false,
        dataset: "",
      });
    }
  };
  componentDidMount() {
    window.addEventListener("keydown", this.closeModal);
  }

  render() {
    const { isModal, dataset } = this.state;
    const { listImages } = this.props;
    return (
      <ul className="imageGallery">
        {listImages.length > 0
          ? listImages.map(({ id, largeImageURL, webformatURL }) => (
              <ImageGalleryItem
                key={id}
                largeImageURL={largeImageURL}
                webformatURL={webformatURL}
                onClick={this.onClickLargeImage}
              />
            ))
          : ""}
        {isModal ? <Modal dataset={dataset} onClick={this.closeModal} /> : ""}
      </ul>
    );
  }
}
