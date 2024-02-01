import { Dimensions, Image } from "react-native";
import React from "react";
import { OnBoardingData } from "../onboardingDTO";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Text } from "react-native";

interface TopViewProps {
  item: OnBoardingData;
  index: number;
  runtime_width: SharedValue<number>;
}

export default function TopView({ item, index, runtime_width }: TopViewProps) {
  const WIDTH = Dimensions.get("screen").width;
  const animated = useAnimatedStyle(() => {
    const opacity = interpolate(
      runtime_width.value,
      [(index - 1) * WIDTH, index * WIDTH, (index + 1) * WIDTH],
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const transformY = interpolate(
      runtime_width.value,
      [(index - 1) * WIDTH, index * WIDTH, (index + 1) * WIDTH],
      [40, 0, 40],
      Extrapolate.CLAMP
    );
    return { opacity, transform: [{ translateY: transformY }] };
  });

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      runtime_width.value,
      [0, WIDTH, 2 * WIDTH],
      ["#FFCF96", "#C1D8C3", "#E5CFF7"]
    );

    return {
      backgroundColor: backgroundColor,
    };
  });

  return (
    <Animated.View
      style={[
        {
          flex: 1,
        },

        animatedColor,
      ]}
    >
      <Animated.View
        style={[
          {
            alignItems: "center",
            width: WIDTH,
            padding: 30,
            paddingTop: 40,
            height: "100%",
          },
          animated,
        ]}
      >
        <Image
          style={{
            resizeMode: "contain",
            height: 300,
            width: WIDTH * 0.8,
            marginVertical: 40,
          }}
          source={item.img}
        />

        <Text
          style={{
            fontSize: 30,
            fontWeight: "900",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            color: "black",
            marginTop: 20,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {item.des}
        </Text>
      </Animated.View>
    </Animated.View>
  );
}
