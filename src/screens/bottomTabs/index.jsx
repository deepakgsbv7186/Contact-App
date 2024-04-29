import {BlurView} from '@react-native-community/blur';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {COLOR, darkTheme, lightTheme} from '../../utils/theme/colors';
import {moderateScale, width} from '../../utils/theme/responsive';
import Dashboard from '../Dashboard';
import Settings from '../Settings';
import {useSelector} from 'react-redux';

const Bottom = createBottomTabNavigator();

const TabBarBackground = () => (
  <BlurView
    overlayColor=""
    blurAmount={5}
    blurType="materialDark"
    style={styles.blurBackground}
  />
);

export default function BottomTabs() {
  const {mode} = useSelector(state => state.theme);
  const currentTheme = mode === 'dark' ? darkTheme : lightTheme;
  const focusedCheck = focused => {
    if (mode === 'dark') {
      return focused ? currentTheme.secondary : currentTheme.primary;
    }
    return focused ? currentTheme.primary : currentTheme.secondary;
  };
  return (
    <View style={{flex: 1}}>
      <Bottom.Navigator
        initialRouteName="Contacts"
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarBackground: TabBarBackground,
        }}>
        <Bottom.Screen
          component={Dashboard}
          name="Contacts"
          options={{
            tabBarIcon: ({focused}) => (
              <AntDesign
                name="contacts"
                size={24}
                color={focusedCheck(focused)}
              />
            ),
          }}
        />
        <Bottom.Screen
          component={Settings}
          name="Settings"
          options={{
            tabBarIcon: ({focused}) => (
              <Octicons name="gear" size={24} color={focusedCheck(focused)} />
            ),
          }}
        />
      </Bottom.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    elevation: 0,
    borderTopColor: 'transparent',
    borderTopWidth: 0,
    // backgroundColor: COLOR.primary,
    height: StatusBar.currentHeight * 2 + 10,
    width: width * 0.3,
    margin: moderateScale(20),
    overflow: 'hidden',
    borderRadius: moderateScale(40),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLOR.primary,
    zIndex: 10,
  },
  blurBackground: {
    zIndex: -10,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
