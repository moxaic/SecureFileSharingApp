import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CreateRoom, JoinRoom, Home } from "../screens";
import { withScreenWrapper } from "../HOCs";

const Stack = createStackNavigator();

const ShareStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={withScreenWrapper(Home)} />
      <Stack.Screen
        name="CreateRoom"
        component={withScreenWrapper(CreateRoom)}
      />
      <Stack.Screen name="JoinRoom" component={withScreenWrapper(JoinRoom)} />
    </Stack.Navigator>
  );
};

export default ShareStack;
