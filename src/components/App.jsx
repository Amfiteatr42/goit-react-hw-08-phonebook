import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export function App() {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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
