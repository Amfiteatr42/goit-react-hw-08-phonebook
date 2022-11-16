import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contacts/operations';
import { getContactsState } from 'redux/contacts/selectors';
import { Btn, ContactItem } from './ContactsList.styled';

export function ContactsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const {
    contacts: { items, isLoading, error },
    filter: filterValue,
  } = useSelector(getContactsState);
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      {error && <div style={{ color: 'red', fontSize: '20px' }}>{error}</div>}
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              {name}: {number}
              <Btn
                type="button"
                disabled={isLoading}
                onClick={() => dispatch(deleteContact(id))}
              >
                {isLoading ? 'wait a sec' : 'Delete'}
              </Btn>
            </ContactItem>
          );
        })}
        {isLoading && <li>Updating...</li>}
      </ul>
    </>
  );
}
