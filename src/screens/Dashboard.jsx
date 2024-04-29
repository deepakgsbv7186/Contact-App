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

export default function Dashboard() {
  const {mode} = useSelector(state => state.theme);
  const currentTheme = mode === 'dark' ? darkTheme : lightTheme;

  const {contacts} = useSelector(state => state.contactList);
  const data = contacts.map(contact => ({
    value: `${contact?.givenName} ${contact?.familyName}`,
    name: `${contact?.givenName} ${contact?.familyName}`,
    img: contact?.hasThumbnail ? contact?.thumbnailPath : null,
    number: contact?.phoneNumbers[0]?.number,
    key: `${contact.recordID}`,
  }));

  return (
    <View
      style={[styles.container, {backgroundColor: currentTheme.background}]}>
      <AlphabetList
        data={data}
        showsVerticalScrollIndicator={false}
        uncategorizedAtTop={true}
        indexLetterStyle={{
          color: currentTheme.primary,
          fontSize: textScale(16),
          fontFamily: FONT.Montserrat200,
        }}
        renderCustomSectionHeader={section => (
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
          </View>
        )}
        renderCustomItem={item => (
          <View
            style={{
              ...styles.listItemContainer,
              // backgroundColor: currentTheme.primary,
            }}>
            {item?.img ? (
              <Image source={{uri: item.img}} style={styles.img} />
            ) : (
              <View
                style={{
                  ...styles.img,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#2D4F12',
                }}>
                <Text
                  style={{
                    fontFamily: FONT.Montserrat600,
                    fontSize: textScale(26),
                    color: currentTheme.textColor,
                  }}>
                  {item?.name?.slice(0, 1).toUpperCase()}
                </Text>
              </View>
            )}
            <View style={styles.column}>
              <Text
                style={{
                  ...styles.listItemLabel,
                  color: currentTheme.secondary,
                }}>
                {item.value.trimStart()}
              </Text>
              <Text
                style={{
                  ...styles.listItemLabel,
                  color: currentTheme.primary,
                  fontSize: textScale(16),
                }}>
                {item.number}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight * 1.5,
    paddingHorizontal: StatusBar.currentHeight / 2,
  },
  sectionHeaderContainer: {
    // backgroundColor: 'red',
    marginTop: moderateScaleVertical(10),
    marginBottom: moderateScaleVertical(4),
    marginHorizontal: moderateScale(16),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: COLOR.primary,
  },
  sectionHeaderLabel: {
    fontFamily: FONT.Montserrat600,
    fontSize: textScale(18),
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    padding: moderateScale(6),
  },
  listItemLabel: {
    fontFamily: FONT.Montserrat400,
    fontSize: textScale(20),
  },
  img: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 999,
    resizeMode: 'cover',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: moderateScaleVertical(6),
  },
});
