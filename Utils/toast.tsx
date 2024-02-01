import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Toast from "react-native-root-toast";
import TextView from "../library/ui/textView";
import { useTheme } from "./theme/themeContext";

const ToastView = ({
  message,
  visibility,
  setVisibility,
}: {
  message: string;
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (visibility) {
      setTimeout(() => setVisibility(false), 1000);
    }
  }, [visibility]);
  return (
    <Toast
      animation
      duration={2000}
      visible={visibility}
      opacity={0.95}
      backgroundColor={theme.colors?.background}
    >
      <TextView lable={message} fontWeight="bold" />
    </Toast>
  );
};

export default ToastView;
