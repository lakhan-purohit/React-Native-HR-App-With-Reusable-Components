import React from "react";
import Container, { IContainer } from "./container";
import { useTheme } from "../../Utils/theme/themeContext";

interface ICard extends Pick<IContainer, "style"> {
  backgroundColor?: string;
  elevation?:number;
  children?: React.ReactNode;
}
const Card = ({ backgroundColor, children,elevation=4, ...rest }: ICard) => {
  const { theme } = useTheme();
  return (
    <Container
      shadowColor={theme.shadowColor}
      shadowOffset={{ width: 0, height: 5 }}
      shadowOpacity={2}
      shadowRadius={2}
      elevation={elevation}
      backgroundColor={theme.colors?.background}
      padding={theme.spacing?.m}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Card;
