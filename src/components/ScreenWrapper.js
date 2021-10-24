import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const ScreenWrapper = ({ children }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
  );
};

export default ScreenWrapper;
