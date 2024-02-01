import { View } from "react-native";
import React from "react";
import { useTheme } from "../../Utils/theme/themeContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IScaffoldProps {
  children: React.ReactNode;
  backgroundColor?: string;
  is_safe_view?: boolean;
}
const Scaffold = ({
  children,
  backgroundColor,
  is_safe_view = false,
}: IScaffoldProps) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          paddingTop: is_safe_view ? insets.top : 0,
          flex: 1,
          backgroundColor: backgroundColor ?? theme.colors?.background,
        },
      ]}
    >
      {children}
    </View>
  );
};

export default Scaffold;
