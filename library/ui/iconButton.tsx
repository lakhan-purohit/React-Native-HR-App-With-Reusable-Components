import { ViewStyle, Platform, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import Container from "./container";
import { useTheme } from "../../Utils/theme/themeContext";

export interface IIconButtonProps extends ViewStyle {
  onPress: () => void;
  android_ripple_color?: string;
  android_ripple_border_radius?: number;
  children: React.ReactNode;
  want_opacity_effect?: boolean;
  ios_touchable_opactity?: number;
  radius?: number;
}
const IconButton = ({
  children,
  onPress = () => {},
  android_ripple_border_radius = 100,
  android_ripple_color,
  ios_touchable_opactity,
  want_opacity_effect,
  radius = 30,
  ...rest
}: IIconButtonProps) => {
  const { theme } = useTheme();
  const rippleColor = android_ripple_color ?? theme.rippleEffectColor;
  const tocuableOpacity = ios_touchable_opactity ?? theme.touchableOpacity;

  return Platform.OS === "android" && !want_opacity_effect ? (
    <Container
      style={{
        overflow: "hidden",
        borderRadius: android_ripple_border_radius,
        maxWidth: radius,
        height: radius,
      }}
    >
      <Pressable
        style={[
          {
            borderRadius: android_ripple_border_radius,
            padding: 5,
            height: radius,
            width: radius,
            alignItems: "center",
            justifyContent: "center",
          },
          { ...rest },
        ]}
        onPress={onPress}
        android_ripple={{ color: rippleColor }}
      >
        {children}
      </Pressable>
    </Container>
  ) : (
    <TouchableOpacity
      activeOpacity={tocuableOpacity}
      onPress={onPress}
      style={[
        {
          borderRadius: android_ripple_border_radius,
          padding: 5,
          height: radius,
          width: radius,
          alignItems: "center",
          justifyContent: "center",
        },
        { ...rest },
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
