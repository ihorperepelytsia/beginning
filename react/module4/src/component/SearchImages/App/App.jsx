import React, { useState, useEffect } from "react";
import { searchImages } from "../services/api";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import mapper from "../utils/mapper";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPage(1);
    if (query.length > 0) {
      setIsLoading(true);
      searchImages(query)
        .then((res) => {
          if (res.data.hits.length > 0) {
            setImages([...mapper(res.data.hits)]);
          } else {
            alert("Nothing found for your request");
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [query]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    setIsLoading(true);
    searchImages(query, page)
      .then((res) => {
        setImages((prevState) => [...prevState, ...mapper(res.data.hits)]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  const requestImages = (searchValue) => {
    if (query === searchValue) {
      alert("You dubll get search");
      return;
    }
    setQuery(searchValue);
  };

  return (
    <>
      <Searchbar onSubmit={requestImages} />
      <ImageGallery listImages={images} />

      {isLoading && <Loader />}
      {images.length > 0 && (
        <Button uploadImages={() => setPage((prevState) => prevState + 1)} />
      )}
    </>
  );
};
export default App;
