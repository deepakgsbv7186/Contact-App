import {createSlice} from '@reduxjs/toolkit';
import {Appearance} from 'react-native';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: Appearance.getColorScheme(),
  },
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const {changeMode} = themeSlice.actions;

export default themeSlice.reducer;
