import PropTypes from 'prop-types'
import { Btn, ContactItem } from "./ContactsList.styled";

export function ContactsList({ contacts, deleteContact }) {
  return (
      <ul>
        {contacts.map(({id, name, number}) => {
          return (
            <ContactItem key={id}>{name}: {number}
              <Btn type="button" onClick={() => {deleteContact(id)}}>Delete</Btn>
            </ContactItem>
          )
        })}
      </ul>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,).isRequired,
  deleteContact: PropTypes.func.isRequired,
}