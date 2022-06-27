import { Component } from "react";
import firstLaterToUpperCase from "../../utils/firstLaterToUpperCase";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import ContactForm from "../ContactForm/ContactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "4591256" },
      // { id: "id-2", name: "Hermione Kline", number: "4438912" },
      // { id: "id-3", name: "Eden Clements", number: "6451779" },
      // { id: "id-4", name: "Annie Copeland", number: "2279126" },
    ],
    // name: "",
    filter: "",
  };
  componentDidMount() {
    // localStorage.setItem("contacts", JSON.stringify(this.state.contacts));

    const serializedState = localStorage.getItem("contacts");
    if (serializedState === null) {
      return undefined;
    } else {
      this.setState({
        contacts: JSON.parse(serializedState),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        "contacts",
        JSON.stringify([...this.state.contacts])
      );
    }
  }

  handleSubmit(name, number) {
    const newContact = {
      id: `id-${name}`,
      name: firstLaterToUpperCase(name),
      number,
    };

    if (
      this.state.contacts.length === 0 ||
      !!this.state.contacts.find((el) => el.name !== newContact.name)
    ) {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      // alert(`${newContact.name} is already contact`);
      this.notify(`${newContact.name} is already contact`);
    }
  }
  filteredContacts(contacts, filterValue) {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  onChangeState = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  notify = (text) =>
    toast.info(text, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  deleteContact = (e) => {
    if (e.target.tagName === "BUTTON") {
      this.setState((prevState) => ({
        contacts: [
          ...prevState.contacts.filter(({ id }) => id !== e.target.name),
        ],
      }));
    }
    if (e.target.tagName === "svg") {
      this.setState((prevState) => ({
        contacts: [
          ...prevState.contacts.filter(
            ({ id }) => id !== e.target.parentNode.name
          ),
        ],
      }));
    }
    if (e.target.tagName === "path") {
      this.setState((prevState) => ({
        contacts: [
          ...prevState.contacts.filter(
            ({ id }) => id !== e.target.parentNode.parentNode.name
          ),
        ],
      }));
    }
  };
  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit.bind(this)} />
        <h3>Contacts</h3>
        <Filter onChange={this.onChangeState} />
        <ContactList
          contacts={this.filteredContacts(contacts, filter)}
          deleteContact={this.deleteContact}
        />
        <ToastContainer />
      </>
    );
  }
}
