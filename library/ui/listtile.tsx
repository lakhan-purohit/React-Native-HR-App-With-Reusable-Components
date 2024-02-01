import React from "react";
import Container, { IContainer } from "./container";

interface IListTile extends Pick<IContainer, "style"> {
  leading?: React.ReactNode;
  center?: React.ReactNode;
  traling?: React.ReactNode;
}

const ListTile = ({ center, leading, traling, ...rest }: IListTile) => {
  return (
    <Container
     
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      {...rest}
      flexDirection="row"
    >
      {leading}
      {center}
      {traling}
    </Container>
  );
};

export default ListTile;
