import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

import { Text } from ".";

const MyButton = ({ children, extraStyles = {}, onPress }) => {
  const {
    colors: { primary },
  } = useTheme();
  return (
    <TouchableOpacity
      {...{ onPress }}
      style={{
        alignItems: "center",
        backgroundColor: primary,
        borderRadius: 16,
        justifyContent: "center",
        margin: 10,
        padding: 20,
        ...extraStyles,
      }}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
