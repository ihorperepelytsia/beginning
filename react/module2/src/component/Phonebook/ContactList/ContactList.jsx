import React from "react";
import PropTypes from "prop-types";
import firstLaterToUpperCase from "../utils/firstLaterToUpperCase";

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.length > 0
      ? contacts.map((el) => (
          <li key={el.id}>
            {firstLaterToUpperCase(el.name)}: {el.number}{" "}
            <button name={el.id} onClick={deleteContact}>
              Delete
            </button>
          </li>
        ))
      : ""}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
export default ContactList;
