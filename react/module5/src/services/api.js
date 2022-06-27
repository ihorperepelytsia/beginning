import axios from "axios";
const API_KEY = "fbc84fa674b06783dc43ba499dadf74a";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrending = () =>
  axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);

export const getSearch = (query) =>
  axios.get(
    `${BASE_URL}/search/company?api_key=${API_KEY}&query=${query}&page=1`
  );

export const getMovieDetails = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);

export const getMovieCredits = (movieId) =>
  axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

export const getMovieReviwse = (movieId) =>
  axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
