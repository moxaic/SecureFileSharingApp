import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

import { Text } from ".";

const MyButton = ({ buttonStyle = {}, children, onPress, textStyle = {} }) => {
  const {
    colors: { background, primary },
  } = useTheme();

  return (
    <TouchableOpacity
      {...{
        onPress,
        style: {
          alignItems: "center",
          backgroundColor: primary,
          borderRadius: 999,
          justifyContent: "center",
          margin: 20,
          padding: 20,
          ...buttonStyle,
        },
      }}>
      <Text
        {...{
          textStyle: {
            color: background,
            ...textStyle,
          },
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;
