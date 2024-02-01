import { View, Text } from "react-native";
import React from "react";
import Container from "./container";

interface ICircleAvatar {
  radius?: number;
  children?: React.ReactNode;
}

const CircleAvatar = ({ children, radius = 25 }: ICircleAvatar) => {
  return (
    <Container
      borderRadius={100}
      overflow="hidden"
      height={radius}
      width={radius}
    >
      {children}
    </Container>
  );
};

export default CircleAvatar;
