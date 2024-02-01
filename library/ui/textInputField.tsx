import {
  TextInput,
  TextInputProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";
import Container from "./container";
import { useTheme } from "../../Utils/theme/themeContext";
import { TInputTextFieldVarient } from "../../Utils/theme/themeProps";
import TextView from "./textView";

interface ITextInputField
  extends Omit<TextInputProps, "style placeholderTextColor"> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  input_style?: StyleProp<TextStyle>;
  placeholderTextColor?: string;
  variants?: TInputTextFieldVarient;
  borderColor?: string;
  container_style?: ViewStyle;
  label?: string;
  label_style?: TextStyle;
  put_label_outside?: boolean;
}

const TextInputField = ({
  prefix,
  suffix,
  placeholderTextColor,
  variants = "filled",
  borderColor,
  container_style,
  input_style,
  label_style,
  label,
  put_label_outside = false,

  ...rest
}: ITextInputField) => {
  const { theme } = useTheme();
  const borderColorc = borderColor ?? theme.colors?.primary;
  const varientStyle =
    variants === "none" ? {} : theme.inputTextFieldTheme?.variants![variants];

  return (
    <>
      {put_label_outside && label && (
        <TextView lable={label} {...label_style} marginLeft={4} />
      )}
      <Container
        alignItems="flex-start"
        justifyContent="center"
        gap={5}
        {...varientStyle}
        borderColor={borderColorc}
        {...container_style}
      >
        {label && !put_label_outside && (
          <TextView lable={label} {...label_style} />
        )}
        <Container flexDirection="row" alignItems="center" gap={5}>
          {prefix}
          <Container flex={1}>
            <TextInput
              {...rest}
              placeholderTextColor={
                placeholderTextColor ??
                theme.inputTextFieldTheme?.placeholderTextColor
              }
              style={[
                { width: "100%", color: theme.colors?.onBackground },
                input_style,
              ]}
            />
          </Container>
          {suffix}
        </Container>
      </Container>
    </>
  );
};

export default TextInputField;
