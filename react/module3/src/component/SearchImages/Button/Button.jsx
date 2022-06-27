import React from "react";
import PropTypes from "prop-types";

const Button = ({ uploadImages }) => (
  <div className="button-box">
    <button className="button" onClick={uploadImages}>
      Load more...
    </button>
  </div>
);
Button.propTypes = {
  uploadImages: PropTypes.func.isRequired,
};

export default Button;
