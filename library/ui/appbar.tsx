import React from "react";
import ListTile from "./listtile";
import { useTheme } from "../../Utils/theme/themeContext";
import { StyleProp, ViewStyle } from "react-native";
interface IAppBar {
  leading?: React.ReactNode;
  center?: React.ReactNode;
  traling?: React.ReactNode;
  height?: number;
  style?: StyleProp<ViewStyle>;
}

const Appbar = ({ center, leading, traling, height = 60, style }: IAppBar) => {
  const { theme } = useTheme();
  return (
    <ListTile
      style={[
        {
          height: height,
          paddingHorizontal: theme.spacing?.xl,
        },
        style,
      ]}
      traling={traling}
      center={center}
      leading={leading}
    />
  );
};

export default Appbar;
