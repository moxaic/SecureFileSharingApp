import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import lightTheme from "../utils/theme";
import AppDrawer from "./AppDrawer";

const Navigation = () => {
  return (
    <NavigationContainer theme={lightTheme}>
      <AppDrawer />
    </NavigationContainer>
  );
};

export default Navigation;
