import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONT} from '../assets/fonts';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../utils/theme/responsive';
import SwipeableRow from './SwipeableRow';

export default function NameCard({item, currentTheme}) {
  return (
    <SwipeableRow>
      <View
        style={{
          ...styles.listItemContainer,
          // backgroundColor: '#29361C',
        }}>
        {item?.img ? (
          <Image source={{uri: item.img}} style={styles.img} />
        ) : (
          <View
            style={{
              ...styles.img,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#384924',
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
              fontSize: textScale(14),
            }}>
            {item.number}
          </Text>
        </View>
      </View>
    </SwipeableRow>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    padding: moderateScale(8),
    borderRadius: moderateScale(10),
    borderCurve: 'continuous',
    paddingLeft: StatusBar.currentHeight,
    // marginBottom: moderateScaleVertical(2),
    // marginRight: moderateScale(14),
  },
  listItemLabel: {
    fontFamily: FONT.Montserrat400,
    fontSize: textScale(16),
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
