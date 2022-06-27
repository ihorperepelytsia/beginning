import React, { Component } from "react";
import { searchImages } from "../services/api";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";

import Button from "../Button/Button";
import mapper from "../utils/mapper";
// import { save, load } from "../utils/storage";

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    query: "",
    isLoading: false,
  };
  componentDidMount() {
    // searchImages();
  }

  requestImages = (searchValue) => {
    if (searchValue.length > 0) {
      this.setState({
        isLoading: true,
      });
      searchImages(searchValue)
        .then((res) => {
          if (res.data.hits.length > 0) {
            this.setState({
              images: [...mapper(res.data.hits)],
              query: searchValue,
              page: 1,
            });
          } else {
            alert("Nothing found for your request");
          }
        })
        .catch((err) => console.log(err))
        .finally(() =>
          this.setState({
            isLoading: false,
          })
        );
    }
  };

  uploadImages = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
    setTimeout(() => {
      searchImages(this.state.query, this.state.page)
        .then((res) => {
          this.setState((prevState) => ({
            images: [...prevState.images, ...mapper(res.data.hits)],
          }));
        })
        .catch((err) => console.log(err))
        .finally(() =>
          this.setState({
            isLoading: false,
          })
        );
    }, 300);
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.requestImages} />
        <ImageGallery listImages={images} />

        {isLoading ? <Loader /> : ""}
        {images.length > 0 ? <Button uploadImages={this.uploadImages} /> : ""}
      </>
    );
  }
}
