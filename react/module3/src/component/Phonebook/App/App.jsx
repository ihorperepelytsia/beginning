import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { save, load } from "../utils/storage";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    if (load("contacts")) {
      this.setState({
        contacts: load("contacts"),
      });
    }
  }

  onChangeState = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  filteredContact = (contacts, filterList) =>
    contacts.filter((el) => {
      return el.name.toLowerCase().includes(filterList.toLowerCase());
    });
  addContact = (nameValue, numberValue, id) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: id,
          name: nameValue,
          number: numberValue,
        },
      ],
    });
  };
  deleteContact = ({ target: { name } }) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts.filter(({ id }) => id !== name)],
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      save("contacts", [...this.state.contacts]);
    }
  }

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            contacts={contacts}
            onChange={this.onChangeState}
            onSubmitForm={this.addContact}
          />

          <h2>Contacts</h2>
          <Filter onChange={this.onChangeState} value={filter} />
          <ContactList
            contacts={this.filteredContact(contacts, filter)}
            deleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}
