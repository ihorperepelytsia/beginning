import React from "react";
import PropTypes from "prop-types";

const Filter = ({ onChange, value }) => (
  <label>
    Find Contacts by Name
    <input name="filter" onChange={onChange} value={value} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.elementType.isRequired,
};
export default Filter;
