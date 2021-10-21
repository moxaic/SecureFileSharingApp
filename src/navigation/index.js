import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import lightTheme from "../utils/theme";
import ShareStack from "./ShareStack";

const NavigationFlow = () => {
  return (
    <NavigationContainer theme={lightTheme}>
      <ShareStack />
    </NavigationContainer>
  );
};

export default NavigationFlow;
