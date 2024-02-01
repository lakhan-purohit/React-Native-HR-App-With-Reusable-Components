import { StyleProp, ViewStyle } from "react-native";
import React from "react";
import AdeptionButton from "./adeptivButton";
import CheckBoxView, { ICheckBox } from "./checkbox";
import TextView from "./textView";
import Container from "./container";

interface ICheckBoxListTile
  extends Pick<
    ICheckBox,
    "active_icon" | "inactive_icon" | "value" | "icon_size" | "radius"
  > {
  onPress: () => void;
  label?: string;
  label_component?: React.ReactNode;
  is_reverse?: boolean;
  decoration_style?: StyleProp<ViewStyle>;
}

const CheckboxListTile = ({
  label,
  label_component,
  is_reverse = false,
  onPress,
  decoration_style,
  ...rest
}: ICheckBoxListTile) => {
  return (
    <AdeptionButton
      onPress={onPress}
      button_style={[
        {
          width: "100%",
          flexDirection: is_reverse ? "row-reverse" : "row",
          gap: 5,
          alignItems: "flex-start",
          paddingVertical: 5,
        },
        decoration_style,
      ]}
    >
      <CheckBoxView {...rest} onPress={onPress} />
      {label ? (
        <TextView lable={label} flexShrink={1} />
      ) : (
        <Container paddingTop={3}>{label_component}</Container>
      )}
    </AdeptionButton>
  );
};

export default CheckboxListTile;
