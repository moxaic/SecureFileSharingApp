import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenWrapper = ({ children }) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
