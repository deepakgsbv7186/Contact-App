import {StyleSheet, Switch, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {darkTheme, lightTheme} from '../utils/theme/colors';
import {FONT} from '../assets/fonts';
import {textScale} from '../utils/theme/responsive';

export default function Dashboard() {
  const theme = useColorScheme();
  const [mode, setMode] = useState(theme);

  const handleSwitch = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <View
      style={[styles.container, {backgroundColor: currentTheme.background}]}>
      <Switch
        trackColor={{false: lightTheme.primary, true: darkTheme.primary}}
        // thumbColor={currentTheme.secondary}
        onValueChange={handleSwitch}
        value={mode === 'dark'}
      />
      <Text style={[styles.text, {color: currentTheme.textColor}]}>
        Dashboard
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONT.Montserrat600,
    fontSize: textScale(30),
  },
});
