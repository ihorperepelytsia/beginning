const mapper = (data) => {
  const datas = [...data].map(({ largeImageURL, webformatURL, id }) => ({
    id,
    largeImageURL,
    webformatURL,
  }));
  return datas;
};
export default mapper;
