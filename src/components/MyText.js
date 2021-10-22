import React from "react";
import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";

const MyText = ({ children, textStyle = {} }) => {
  const {
    colors: { text },
  } = useTheme();
  return (
    <Text style={{ color: text, fontSize: 18, ...textStyle }}>{children}</Text>
  );
};

export default MyText;
