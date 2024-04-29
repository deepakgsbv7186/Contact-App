import {configureStore} from '@reduxjs/toolkit';
import themeMode from './themeSlice';
import contactSlice from './contactSlice';

export const store = configureStore({
  reducer: {
    theme: themeMode,
    contactList: contactSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});
