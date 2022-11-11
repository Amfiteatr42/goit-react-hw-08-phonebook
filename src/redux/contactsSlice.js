import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  console.log('handleRejected', action.payload);
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: {
    [getContacts.pending]: handlePending,
    [getContacts.fulfilled]({ contacts }, action) {
      contacts.items = action.payload;
      contacts.isLoading = false;
    },
    [getContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled]({ contacts }, action) {
      contacts.items.push(action.payload);
      contacts.isLoading = false;
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]({ contacts }, action) {
      const index = contacts.items.findIndex(
        task => task.id === action.payload.id
      );
      contacts.items.splice(index, 1);
      contacts.isLoading = false;
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
