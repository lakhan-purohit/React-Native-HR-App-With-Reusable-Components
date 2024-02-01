import {
  ActivityIndicator,
  Platform,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import Container from "./container";
import { Pressable, TouchableOpacity } from "react-native";
import { useTheme } from "../../Utils/theme/themeContext";

export interface IButtonProps {
  onPress: () => void;
  android_ripple_color?: string;
  android_ripple_border_radius?: number;
  children: React.ReactNode;
  want_opacity_effect?: boolean;
  button_style?: StyleProp<ViewStyle>;
  ios_touchable_opactity?: number;
  is_loading?: boolean;
}
const AdeptionButton = ({
  children,
  onPress = () => {},
  android_ripple_border_radius = 0,
  android_ripple_color,
  want_opacity_effect = false,
  ios_touchable_opactity,
  button_style,
  is_loading = false,
}: IButtonProps) => {
  const { theme } = useTheme();
  const rippleColor = android_ripple_color ?? theme.rippleEffectColor;
  const tocuableOpacity = ios_touchable_opactity ?? theme.touchableOpacity;
  return Platform.OS === "android" && !want_opacity_effect ? (
    <Container
      style={{
        overflow: "hidden",
        borderRadius: android_ripple_border_radius,
      }}
    >
      <Pressable
        style={[button_style]}
        onPress={onPress}
        android_ripple={{ color: rippleColor }}
        
      >
        {is_loading ? (
          <ActivityIndicator color={theme.colors?.white} size="small" />
        ) : (
          children
        )}
      </Pressable>
    </Container>
  ) : (
    <TouchableOpacity
      activeOpacity={tocuableOpacity}
      style={[button_style]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default AdeptionButton;
