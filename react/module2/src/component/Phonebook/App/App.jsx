import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "4591256" },
      { id: "id-2", name: "Hermione Kline", number: "4438912" },
      { id: "id-3", name: "Eden Clements", number: "6451779" },
      { id: "id-4", name: "Annie Copeland", number: "2279126" },
    ],
    filter: "",
  };

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
