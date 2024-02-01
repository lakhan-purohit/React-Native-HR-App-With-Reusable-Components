import { View } from "react-native";
import React from "react";

interface ISizedBox {
  height?: number;
  width?: number;
}

const SizedBox = ({ height = 0, width = 0 }: ISizedBox) => {
  return <View style={[{ height, width }]} />;
};

export default SizedBox;
