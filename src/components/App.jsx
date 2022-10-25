import { Component } from "react";
import { nanoid } from 'nanoid'
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Section } from './Section/Section'
import { Filter } from './Filter/Filter'

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  addContact = (e) => {
    e.preventDefault()
   
    const newContact = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
      id: nanoid(),
    }

    const isInContacts = this.state.contacts.find(contact => contact.name === newContact.name)

    if (isInContacts) {
      alert('What are you doing, man? You already have this dude in your Phonebook!')
      return
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }))
  }

  filterByName = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }
  
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

    return (
      <>
        <Section title={'Phone Book'}>
          <AddContactForm onAddContact={this.addContact}></AddContactForm>
        </Section>
        <Section title={'Contacts'}>
          <Filter filterByName={this.filterByName} filterValue={filter}></Filter>
          <ContactsList contacts={filteredContacts} deleteContact={this.deleteContact}></ContactsList>
        </Section>
      </>
    )
  }
}