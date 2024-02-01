import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconButton, { IIconButtonProps } from "./iconButton";
import { useTheme } from "../../Utils/theme/themeContext";

export interface ICheckBox extends Omit<IIconButtonProps, "children"> {
  active_icon?:
    | "checkbox-marked"
    | "checkbox-marked-outline"
    | "checkbox-outline"
    | "checkbox-marked-circle"
    | "checkbox-marked-circle-outline"
    | "checkbox-intermediate";
  inactive_icon?: "checkbox-blank-outline" | "checkbox-blank-circle-outline";
  value?: boolean;
  icon_size?: number;
}

const CheckBoxView = ({
  onPress,
  active_icon = "checkbox-marked-circle",
  inactive_icon = "checkbox-blank-outline",
  value = true,
  radius = 20,
  icon_size = 20,
  ...rest
}: ICheckBox) => {
  const { theme } = useTheme();
  return (
    <IconButton
      onPress={() => {
        onPress();
      }}
      {...rest}
      radius={icon_size >= radius ? icon_size + 10 : radius}
      justifyContent="center"
      alignItems="center"
    >
      <MaterialCommunityIcons
        name={value ? active_icon : inactive_icon}
        style={{ fontSize: icon_size }}
        color={theme.colors?.primary}
      />
    </IconButton>
  );
};

export default CheckBoxView;
