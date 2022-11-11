import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/operations';
import { useEffect } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Section title={'Phone Book'}>
        <AddContactForm></AddContactForm>
      </Section>
      <Section title={'Contacts:'}>
        <Filter></Filter>
        <ContactsList></ContactsList>
      </Section>
    </div>
  );
}
