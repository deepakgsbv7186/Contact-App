import {createSlice} from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts/listing',
  initialState: {
    contacts: [],
  },
  reducers: {
    loadContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const {loadContacts} = contactSlice.actions;

export default contactSlice.reducer;
