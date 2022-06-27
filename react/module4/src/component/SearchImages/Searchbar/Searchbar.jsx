import React, { useState } from "react";
import PropTypes from "prop-types";
const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const onChangeState = ({ target: { value } }) => {
    setQuery(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.length < 2) {
      alert("Make your query more specific");
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <header className="searchbar">
      <form className="searchForm" onSubmit={handleSubmit}>
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
          onChange={onChangeState}
          value={query}
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
