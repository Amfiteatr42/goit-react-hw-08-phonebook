import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';

export function ContactsPage() {
  return (
    <div className="wrapper">
      <Section title={'Phone Book'}>
        <AddContactForm />
      </Section>
      <Section title={'Contacts:'}>
        <Filter />
        <ContactsList />
      </Section>
    </div>
  );
}
