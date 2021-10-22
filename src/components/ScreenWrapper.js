import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenWrapper = ({ children }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </ScrollView>
  );
};

export default ScreenWrapper;
