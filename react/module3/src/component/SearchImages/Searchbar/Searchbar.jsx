import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  onChangeState = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query <= 1) {
      alert("Make your query more specific");
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({
      query: "",
    });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>

          <input
            className="searchForm-input"
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChangeState}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}
