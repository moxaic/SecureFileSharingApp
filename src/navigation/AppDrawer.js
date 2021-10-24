import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { CreateRoom, JoinRoom, Home } from "../screens";
import { withScreenWrapper } from "../HOCs";
import CreateRoomStack from "./CreateRoomStack";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "back",
        headerShown: true,
        headerTitleAlign: "center",
      }}>
      <Drawer.Screen name="Home" component={withScreenWrapper(Home)} />
      <Drawer.Screen name="CreateRoom" component={CreateRoomStack} />
      <Drawer.Screen name="JoinRoom" component={withScreenWrapper(JoinRoom)} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
