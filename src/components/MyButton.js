import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

import { Text } from ".";

const MyButton = ({
  buttonStyle = {},
  children,
  disabled = false,
  onPress,
  textStyle = {},
}) => {
  const {
    colors: { background, primary },
  } = useTheme();

  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        backgroundColor: primary,
        borderRadius: 999,
        justifyContent: "center",
        margin: 20,
        padding: 20,
        ...buttonStyle,
      }}
      {...{
        disabled,
        onPress,
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
