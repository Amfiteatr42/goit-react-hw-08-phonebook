import PropTypes from 'prop-types'
import { Component } from 'react'
import {Form, Label, Input, Btn} from './AddContactForm.styled'


export class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  onChange = (e) => {
    const { name, value } = e.target;
     this.setState({
       [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const { name, number } = this.state;

    this.props.onAddContact(name, number)
    this.reset()
  }

  reset() {
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
    const { name, number } = this.state

    return (
    <Form onSubmit={this.onSubmit}>
      <Label htmlFor="name">
         Name
        <Input
          onChange={this.onChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label htmlFor="number">
        Number
        <Input
          onChange={this.onChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
        <Btn type="submit">Add Contact</Btn>
    </Form>
  )
  }
}

AddContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}