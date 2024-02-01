import {StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  index: number;
  runtime_width: SharedValue<number>;
};

const AnimatedDot = ({index, runtime_width}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const animatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      runtime_width.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [20, 40, 20],
      Extrapolate.CLAMP,
    );

    const opacityAnimation = interpolate(
      runtime_width.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );
    return {
      width: widthAnimation,
      opacity: opacityAnimation,
    };
  });

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      runtime_width.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      ['#662549', '#1e2169', '#9D44C0'],
    );

    return {
      backgroundColor: backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.dots, animatedDotStyle, animatedColor]} />
  );
};

export default AnimatedDot;

const styles = StyleSheet.create({
  dots: {
    height: 10,
    borderRadius: 5,
  },
});