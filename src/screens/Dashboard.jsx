import {StyleSheet, Switch, Text, View} from 'react-native';
import {darkTheme, lightTheme} from '../utils/theme/colors';
import {FONT} from '../assets/fonts';
import {textScale} from '../utils/theme/responsive';
import {useDispatch, useSelector} from 'react-redux';
import {changeMode} from '../redux/themeSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  const {mode} = useSelector(state => state.theme);
  console.log('🚀 ~ Dashboard ~ mode:', mode);

  const handleSwitch = () => {
    // Toggle between 'dark' and 'light' modes based on the current mode
    dispatch(changeMode(mode === 'dark' ? 'light' : 'dark'));
  };

  const currentTheme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <View
      style={{...styles.container, backgroundColor: currentTheme.background}}>
      <Switch
        trackColor={{false: lightTheme.primary, true: darkTheme.primary}}
        thumbColor={currentTheme.secondary}
        onValueChange={handleSwitch}
        value={mode === 'dark'}
      />
      <Text style={{...styles.text, color: currentTheme.textColor}}>
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
