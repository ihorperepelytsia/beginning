import React, { Component } from "react";
// import { getTrending } from "../../services/api.js";
export default class HomePage extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    // getTrending().then((res) => {
    //   console.log(res);
    //   this.setState({
    //     movies: res.data.results,
    //   });
    // });
    let b = 20;

    if (true) {
      console.log(b);
      let b = 10;
    }
  }
  render() {
    // const { movies } = this.state;
    return (
      <ul>
        {/* {movies.map((el) => (
          <li key={el.id}>{el.original_title}</li>
        ))} */}
      </ul>
    );
  }
}
