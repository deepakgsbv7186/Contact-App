import {configureStore} from '@reduxjs/toolkit';
import themeMode from './themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeMode,
  },
});
