import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, View, I18nManager} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function SwipeableRow({children}) {
  const swipeableRow = useRef(null);

  // const renderLeftActions = (_progress, dragX) => {
  //   const trans = dragX.interpolate({
  //     inputRange: [0, 50, 100, 101],
  //     outputRange: [-20, 0, 0, 1],
  //     extrapolate: 'clamp',
  //   });
  //   return (
  //     <RectButton style={styles.leftAction} onPress={close}>
  //       <Animated.Text
  //         style={[
  //           styles.actionText,
  //           {
  //             transform: [{translateX: trans}],
  //           },
  //         ]}>
  //         Archive
  //       </Animated.Text>
  //     </RectButton>
  //   );
  // };

  const renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      close();
      // eslint-disable-next-line no-alert
      window.alert(text);
    };

    return (
      <Animated.View style={{flex: 1, transform: [{translateX: trans}]}}>
        <RectButton
          style={[styles.rightAction, {backgroundColor: color}]}
          onPress={pressHandler}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = (progress, _dragAnimatedValue) => (
    <View
      style={{
        width: 192,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      }}>
      {renderRightAction('More', '#dd2c00', 64, progress)}
    </View>
  );

  const updateRef = ref => {
    swipeableRow.current = ref;
  };

  const close = () => {
    swipeableRow.current.close();
  };

  return (
    <Swipeable
      ref={updateRef}
      friction={1}
      enableTrackpadTwoFingerGesture
      leftThreshold={30}
      rightThreshold={40}
      // renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableOpen={direction => {
        console.log(`Opening swipeable from the ${direction}`);
      }}
      onSwipeableClose={direction => {
        console.log(`Closing swipeable to the ${direction}`);
      }}>
      {children}
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
