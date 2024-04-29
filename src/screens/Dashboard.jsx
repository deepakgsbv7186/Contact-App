import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {darkTheme, lightTheme} from '../utils/theme/colors';

export default function Dashboard() {
  const {mode} = useSelector(state => state.theme);
  const currentTheme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={{flex: 1, backgroundColor: currentTheme.background}}>
      <Text>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
