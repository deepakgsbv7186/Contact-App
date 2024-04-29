import React, {useEffect} from 'react';
import {PermissionsAndroid, StatusBar} from 'react-native';
import Contacts from 'react-native-contacts';
import FlashMessage from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {FONT} from './assets/fonts';
import RootNavigation from './navigations/RootNavigation';
import {COLOR} from './utils/theme/colors';
import {textScale} from './utils/theme/responsive';
import {loadContacts} from './redux/contactSlice';

export default function App() {
  const {mode} = useSelector(state => state.theme);
  const statusBarStyle = mode === 'dark' ? 'light-content' : 'dark-content';
  const dispatch = useDispatch();

  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then(res => {
        console.log('Permission: ', res);
        Contacts.getAll()
          .then(contacts => {
            dispatch(loadContacts(contacts));
          })
          .catch(error => {
            console.log('🚀 ~ useEffect ~ error:', error);
          });
      })
      .catch(error => {
        console.error('Permission error: ', error);
      });
  }, []);
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
