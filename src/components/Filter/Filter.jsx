export function Filter({filterByName, filterValue}) {
  return (
    <label htmlFor="filter">
        Filter by Name
        <input
          type="text"
          name="filter"
          onChange={filterByName}
          value={filterValue}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
  )
}