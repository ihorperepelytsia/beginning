import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
const ContactForm = ({ contacts, onSubmitForm }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const addContact = (e) => {
    e.preventDefault();

    contacts.find((el) => el.name === name)
      ? alert(`${name} is alredy in contacts`)
      : (onSubmitForm(name, number, uuidv4()), setName(""), setNumber(""));
  };
  const onChangeState = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  return (
    <form onSubmit={addContact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChangeState}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onChangeState}
        />
      </label>
      <button>Add contact</button>
    </form>
  );
};
ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default ContactForm;
