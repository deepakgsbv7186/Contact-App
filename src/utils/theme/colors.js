import {processColor} from 'react-native';

export const COLOR = {
  transparent: 'transparent',
  // Black color variants
  black: processColor('rgba(0,0,0,1)'),
  // White color variants
  white: processColor('#FFFFFF'),

  // base colors
  primary: processColor('#8BC34A'),
};

export const lightTheme = {
  background: processColor('#FAFFF0'),
  primary: processColor('#8BC34A'),
  textColor: processColor('#162909'),
};
export const darkTheme = {
  background: processColor('#1C2316'),
  primary: processColor('#79A942'),
  textColor: processColor('#ECF1E2'),
};

// Light Mode: #8BC34A
// #FAFFF0
// #F0F5E6
// #DCE8C8
// #C1DB9A
// #A5CF70
// #8BC34A
// #679C33
// #487521
// #2D4F12
// #162909
// Dark Mode: #8BC34A
// #1C2316
// #29361C
// #384924
// #4A632C
// #618637
// #79A942
// #97BC67
// #B8D193
// #D6E2C3
// #ECF1E2
