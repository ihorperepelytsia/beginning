import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export default class ContactForm extends Component {
  static propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  addContact = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.contacts.find((el) => el.name === name)
      ? alert(`${name} is alredy in contacts`)
      : (this.props.onSubmitForm(name, number, uuidv4()),
        this.setState({
          name: "",
          number: "",
        }));
  };
  onChangeState = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.addContact}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onChangeState}
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
            onChange={this.onChangeState}
          />
        </label>
        <button>Add contact</button>
      </form>
    );
  }
}
