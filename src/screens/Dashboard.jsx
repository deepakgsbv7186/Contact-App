import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {COLOR, darkTheme, lightTheme} from '../utils/theme/colors';
import {AlphabetList} from 'react-native-section-alphabet-list';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../utils/theme/responsive';
import {FONT} from '../assets/fonts';
import contacts from '../utils/constants/contacts.json';
import NameCard from '../components/NameCard';

export default function Dashboard() {
  const {mode} = useSelector(state => state.theme);
  const currentTheme = mode === 'dark' ? darkTheme : lightTheme;

  // const {contacts} = useSelector(state => state.contactList);
  const data = contacts.map(contact => ({
    value: `${contact?.givenName} ${contact?.familyName}`,
    name: `${contact?.givenName} ${contact?.familyName}`,
    number: contact?.phoneNumbers[0]?.number,
    key: `${contact.recordID}`,
    img: null,
    // img: contact?.hasThumbnail ? contact?.thumbnailPath : null,
  }));

  return (
    <View
      style={[styles.container, {backgroundColor: currentTheme.background}]}>
      <AlphabetList
        data={data}
        showsVerticalScrollIndicator={false}
        uncategorizedAtTop={true}
        contentContainerStyle={{paddingBottom: moderateScaleVertical(100)}}
        indexLetterStyle={{
          color: currentTheme.primary,
          fontSize: textScale(16),
          fontFamily: FONT.Montserrat200,
          // marginLeft: moderateScale(20),
        }}
        letterListContainerStyle={{
          backgroundColor: 'red',
          padding: 20,
          flex: 1,
        }}
        renderCustomSectionHeader={section => (
          <View
            style={{
              ...styles.sectionHeaderContainer,
              backgroundColor: '#29361C',
            }}>
            <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
          </View>
        )}
        renderCustomItem={item => (
          <NameCard item={item} currentTheme={currentTheme} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight * 1.5,
    // paddingHorizontal: StatusBar.currentHeight / 2,
  },
  sectionHeaderContainer: {
    marginTop: moderateScaleVertical(20),
    marginBottom: moderateScaleVertical(10),
    marginHorizontal: StatusBar.currentHeight / 2,
    paddingHorizontal: StatusBar.currentHeight,
    paddingVertical: StatusBar.currentHeight / 4,
    borderRadius: moderateScale(20),
    borderCurve: 'continuous',
  },
  sectionHeaderLabel: {
    fontFamily: FONT.Montserrat600,
    fontSize: textScale(14),
  },
});
