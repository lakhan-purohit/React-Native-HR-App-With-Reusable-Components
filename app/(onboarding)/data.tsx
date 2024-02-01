import { View, useWindowDimensions } from "react-native";
import React from "react";
import { Text } from "react-native";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  index: number;
  runtime_width: SharedValue<number>;
  title: string;
};

const AnimatedBox = Animated.createAnimatedComponent(View);

const DataC = ({ index, runtime_width, title }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const animatedDotStyle = useAnimatedStyle(() => {
    const displayAnimation = interpolate(
      runtime_width.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [-10, 1, 10],
      Extrapolate.CLAMP
    );

    const opacityAnimation = interpolate(
      runtime_width.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      // height:heightAnimation == 100 ? withSpring("auto") : heightAnimation ,
      opacity: opacityAnimation,
      display: opacityAnimation >= 0.5 ? "flex" : "none",
      transform: [{ translateX: displayAnimation }],
    };
  });

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      runtime_width.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      ["#005b4f", "#1e2169", "#F15937"]
    );

    return {
      color: backgroundColor,
    };
  });

  return (
    <AnimatedBox
      style={[
        { justifyContent: "center", alignItems: "center" },
        animatedDotStyle,
      ]}
    >
      <Text style={{fontWeight:"900",fontSize:30}}>{title}</Text>
      <Text 
      
      >
        It is a long realistic fact that a reader will be distractd by readable
        content.
      </Text>
    </AnimatedBox>
  );
};

export default DataC;
