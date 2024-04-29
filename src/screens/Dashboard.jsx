import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';
import {darkTheme, lightTheme} from '../utils/theme/colors';
import {FONT} from '../assets/fonts';
import {textScale} from '../utils/theme/responsive';
import {useDispatch, useSelector} from 'react-redux';
import {changeMode} from '../redux/themeSlice';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Dashboard() {
  const dispatch = useDispatch();
  const {mode} = useSelector(state => state.theme);
  console.log('🚀 ~ Dashboard ~ mode:', mode);

  const springValue = useSharedValue(1); // Initialize the spring value

  const handleSwitch = () => {
    // Toggle between 'dark' and 'light' modes based on the current mode
    dispatch(changeMode(mode === 'dark' ? 'light' : 'dark'));
    springValue.value = withSpring(springValue.value === 1 ? 0 : 1); // Toggle the spring value for animation
  };

  const currentTheme = mode === 'dark' ? darkTheme : lightTheme;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        springValue.value,
        [0, 1],
        [darkTheme.background, lightTheme.background],
      ),
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Switch
        trackColor={{false: lightTheme.primary, true: darkTheme.primary}}
        thumbColor={currentTheme.secondary}
        onValueChange={handleSwitch}
        value={mode === 'dark'}
      />
      <Text style={[styles.text, {color: currentTheme.textColor}]}>
        Dashboard
      </Text>
      <Entypo name="light-up" size={30} color={currentTheme.textColor} />
      <MaterialIcons name="dark-mode" size={30} color={currentTheme.primary} />
    </Animated.View>
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
