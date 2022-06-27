import { AiFillCloseCircle } from "react-icons/ai";
import styled from "styled-components";
const List = styled.ul`
  list-style-type: circle;
`;
const Items = styled.li`
  display: flex;
  margin: 8px;
`;
const Text = styled.p`
  min-width: 175px;
  margin: 0;
`;
const Button = styled.button`
  width: max-content;
  margin-left: 16px;
  border: none;
  color: white;
  background-color: blue;
  padding: 4px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    margin-left: 4px;
  }
`;
const ContactList = ({ contacts, deleteContact }) => (
  <>
    <List>
      {contacts.length > 0
        ? contacts.map((contact) => (
            <Items key={contact.id}>
              <Text>
                {contact.name} - {contact.number}
              </Text>
              <Button name={contact.id} onClick={deleteContact}>
                Delete
                <AiFillCloseCircle name={contact.id} />
              </Button>
            </Items>
          ))
        : ""}
    </List>
  </>
);

export default ContactList;
