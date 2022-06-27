import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePages/HomePage";
import Nav from "../Nav/Nav";

export default class App extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies/:movieId/Cast" component={Cast} />
        <Route path="/movies/:movieId/Reviews" component={Reviews} /> */}
        </Routes>
      </>
    );
  }
}
