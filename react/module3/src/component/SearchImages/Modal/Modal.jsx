import React from "react";
import PropTypes from "prop-types";
const Modal = ({ dataset, onClick }) => (
  <div className="overlay" onClick={onClick}>
    <div className="modal">
      <img src={dataset} />
    </div>
  </div>
);
Modal.propTypes = {
  dataset: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Modal;
