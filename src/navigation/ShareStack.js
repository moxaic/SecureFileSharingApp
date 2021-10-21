import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Receive, Send } from "../screens";
import { withScreenWrapper } from "../HOCs";

const Stack = createStackNavigator();

const ShareStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={withScreenWrapper(Home)} />
      <Stack.Screen name="Receive" component={withScreenWrapper(Receive)} />
      <Stack.Screen name="Send" component={withScreenWrapper(Send)} />
    </Stack.Navigator>
  );
};

export default ShareStack;
