import axios from "axios";

const apiKey = "15725312-965e6abfe89225a1afd144b44";
const BASE_URL = "https://pixabay.com/api/";

export const searchImages = (searchValue = "tesla", page = 1) => {
  try {
    return axios.get(
      `${BASE_URL}?q=${searchValue}&page=${page}&per_page=4&key=${apiKey}`
    );
  } catch (err) {
    console.log(err);
  }
};
