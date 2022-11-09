import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { Btn, ContactItem } from './ContactsList.styled';

export function ContactsList() {
  const { contacts } = useSelector(state => state.contacts);
  console.log('contacts', contacts);
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            {name}: {number}
            <Btn type="button" onClick={() => dispatch(removeContact(id))}>
              Delete
            </Btn>
          </ContactItem>
        );
      })}
    </ul>
  );
}
