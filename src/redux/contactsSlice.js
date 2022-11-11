import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

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
  extraReducers:
    //{
    //Object notation:
    // [getContacts.pending]: handlePending,
    // [getContacts.fulfilled]({ contacts }, action) {
    //   contacts.items = action.payload;
    //   contacts.isLoading = false;
    // },
    // [getContacts.rejected]: handleRejected,
    // [addContact.pending]: handlePending,
    // [addContact.fulfilled]({ contacts }, action) {
    //   contacts.items.push(action.payload);
    //   contacts.isLoading = false;
    // },
    // [addContact.rejected]: handleRejected,
    // [deleteContact.pending]: handlePending,
    // [deleteContact.fulfilled]({ contacts }, action) {
    //   const index = contacts.items.findIndex(
    //     task => task.id === action.payload.id
    //   );
    //   contacts.items.splice(index, 1);
    //   contacts.isLoading = false;
    // },
    // [deleteContact.rejected]: handleRejected,
    //}
    // Builder notation:

    builder => {
      builder
        .addCase(getContacts.pending, handlePending)
        .addCase(getContacts.fulfilled, ({ contacts }, action) => {
          contacts.items = action.payload;
          contacts.isLoading = false;
        })
        // .addCase(getContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, ({ contacts }, action) => {
          contacts.items.push(action.payload);
          contacts.isLoading = false;
        })
        // .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, ({ contacts }, action) => {
          const index = contacts.items.findIndex(
            task => task.id === action.payload.id
          );
          contacts.items.splice(index, 1);
          contacts.isLoading = false;
        })
        // .addCase(deleteContact.rejected, handleRejected)
        .addMatcher(
          isRejectedAction,
          // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
          (state, action) => {
            console.log('reject');
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
          }
        );
      // and provide a default case if no other handlers matched
      // .addDefaultCase((state, action) => {});
    },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
