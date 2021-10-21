import React from "react";
import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";

const MyText = ({ children }) => {
  const {
    colors: { text },
  } = useTheme();
  return <Text style={{ color: text, fontSize: 18 }}>{children}</Text>;
};

export default MyText;
