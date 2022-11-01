import { nanoid } from 'nanoid'
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Section } from './Section/Section'
import { Filter } from './Filter/Filter'
import { useState, useEffect } from 'react';


export function App() {
  const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  function addContact(name, number) {
    const newContact = {
      name,
      number,
      id: nanoid(),
    }

    const isInContacts = contacts.find(contact => contact.name === newContact.name)

    if (isInContacts) {
      alert('What are you doing, man? You already have this dude in your Phonebook!')
      return
    }

    setContacts([...contacts, newContact])
  }

  function filterByName(e) {
    setFilter(e.target.value)
  }

  function deleteContact(id) {
     setContacts(contacts.filter(contact => contact.id !== id))
  }

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))


  return (
    <div className='wrapper'>
      <Section title={'Phone Book'}>
        <AddContactForm onAddContact={addContact}></AddContactForm>
      </Section>
      <Section title={'Contacts:'}>
        <Filter filterByName={filterByName} filterValue={filter}></Filter>
        <ContactsList contacts={filteredContacts} deleteContact={deleteContact}></ContactsList>
      </Section>
    </div>
  )
}

  // componentDidMount = () => {
  //   const savedContacts = JSON.parse(localStorage.getItem('contacts'))
  //   if (savedContacts) {
  //     this.setState({
  //     contacts: savedContacts,
  //   })
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // }