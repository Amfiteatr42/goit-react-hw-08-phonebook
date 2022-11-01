import PropTypes from 'prop-types'
import { Label, Input, Wrap } from "./Filter.styled";


export function Filter({ filterByName, filterValue }) {
  return (
    <Wrap>
       <Label>
        Filter by Name
        <Input
          type="text"
          name="filter"
          onChange={filterByName}
          value={filterValue}
          placeholder='Start enter contact name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
    </Wrap>
  )
}

Filter.propTypes = {
  filterByName: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
}