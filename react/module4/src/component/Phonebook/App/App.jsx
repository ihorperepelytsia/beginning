import React, { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { save, load } from "../utils/storage";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    if (load("contacts")) {
      setContacts(load("contacts"));
    }
  }, []);
  useEffect(() => {
    save("contacts", [...contacts]);
  }, [contacts]);

  const onChangeState = ({ target: { value } }) => {
    setFilter(value);
  };
  const filteredContact = (contacts, filterList) =>
    contacts.filter((el) => {
      return el.name.toLowerCase().includes(filterList.toLowerCase());
    });
  const addContact = (nameValue, numberValue, id) => {
    setContacts([
      ...contacts,
      {
        id: id,
        name: nameValue,
        number: numberValue,
      },
    ]);
  };
  const deleteContact = ({ target: { name } }) => {
    setContacts((prevState) => [...prevState.filter(({ id }) => id !== name)]);
  };
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onSubmitForm={addContact} />

        <h2>Contacts</h2>
        <Filter onChange={onChangeState} value={filter} />
        <ContactList
          contacts={filteredContact(contacts, filter)}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
};
export default App;
