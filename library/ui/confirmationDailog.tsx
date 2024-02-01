import { Dimensions } from "react-native";
import React from "react";
import Dailog from "./dailog";
import Container from "./container";
import { useTheme } from "../../Utils/theme/themeContext";
import TextView from "./textView";
import AdeptionButton from "./adeptivButton";

interface IConfirmationFailog {
  open: boolean;
  onYes: () => void;
  onNo: () => void;
  onClose: () => void;
  title: string;
  subtitle: string;
}

const ConfirmationDailog = ({
  onNo,
  onYes,
  onClose,
  open,
  subtitle,
  title,
}: IConfirmationFailog) => {
  const { theme } = useTheme();
  const { width } = Dimensions.get("window");
  return (
    <Dailog open={open} onClose={onClose}>
      <Container
        marginVertical={theme.spacing?.l}
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <Container
          padding={theme.spacing?.l}
          borderRadius={15}
          backgroundColor={theme.colors?.background} 
          alignItems="flex-start"
        >
          <TextView
            lable={title}
            varient="heading"
            fontSize={28}
            marginBottom={theme.spacing?.s}
          />
          <TextView lable={subtitle} varient="subtitle" fontSize={16} />
          <Container
            flexDirection="row"
            gap={10}
            marginTop={15}
            justifyContent="flex-end"
            alignSelf="flex-end"
          >
            <AdeptionButton
              button_style={{
                padding: 10,
              }}
              onPress={onYes}
            >
              <TextView lable="Yes" color={theme.colors?.primary} />
            </AdeptionButton>
            <AdeptionButton
              button_style={{
                padding: 10,
              }}
              onPress={onNo}
            >
              <TextView lable="No" color={theme.colors?.primary} />
            </AdeptionButton>
          </Container>
        </Container>
      </Container>
    </Dailog>
  );
};

export default ConfirmationDailog;
