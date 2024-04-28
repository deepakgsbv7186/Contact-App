import React, {useEffect} from 'react';
import {PermissionsAndroid, StatusBar} from 'react-native';
import Contacts from 'react-native-contacts';
import FlashMessage from 'react-native-flash-message';
import {useSelector} from 'react-redux';
import {FONT} from './assets/fonts';
import RootNavigation from './navigations/RootNavigation';
import {COLOR} from './utils/theme/colors';
import {textScale} from './utils/theme/responsive';

export default function App() {
  const {mode} = useSelector(state => state.theme);
  const statusBarStyle = mode === 'dark' ? 'light-content' : 'dark-content';

  // useEffect(() => {
  //   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
  //     title: 'Contacts',
  //     message: 'This app would like to view your contacts.',
  //     buttonPositive: 'Please accept bare mortal',
  //   })
  //     .then(res => {
  //       console.log('Permission: ', res);
  //       Contacts.getAll()
  //         .then(contacts => {
  //           console.log('🚀 ~ .then ~ contacts:', contacts[0]);
  //         })
  //         .catch(e => {
  //           console.log(e);
  //         });
  //     })
  //     .catch(error => {
  //       console.error('Permission error: ', error);
  //     });
  // }, []);
  return (
    <>
      <StatusBar
        translucent
        barStyle={statusBarStyle}
        animated={true}
        backgroundColor={COLOR.transparent}
      />
      <RootNavigation />
      <FlashMessage
        position="top"
        statusBarHeight={StatusBar.currentHeight}
        titleStyle={{
          fontFamily: FONT.Montserrat400,
          fontSize: textScale(16),
          color: COLOR.white,
        }}
        textStyle={{
          fontFamily: FONT.Montserrat400,
          fontSize: textScale(14),
          color: COLOR.white,
        }}
      />
    </>
  );
}
