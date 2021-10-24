import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { withScreenWrapper } from "../HOCs";
import { CreateRoom, ReceiveFiles } from "../screens";

const Stack = createStackNavigator();

const CreateRoomStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Create Room"
        component={withScreenWrapper(CreateRoom)}
      />
      <Stack.Screen
        name="ReceiveFiles"
        component={withScreenWrapper(ReceiveFiles)}
      />
    </Stack.Navigator>
  );
};

export default CreateRoomStack;
