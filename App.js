import React, { useEffect } from "react";
import { PermissionsAndroid } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  initialize,
  startDiscoveringPeers,
  stopDiscoveringPeers,
  unsubscribeFromPeersUpdates,
  unsubscribeFromThisDeviceChanged,
  unsubscribeFromConnectionInfoUpdates,
  subscribeOnConnectionInfoUpdates,
  subscribeOnThisDeviceChanged,
  subscribeOnPeersUpdates,
  connect,
  cancelConnect,
  createGroup,
  removeGroup,
  getAvailablePeers,
  sendFile,
  receiveFile,
  getConnectionInfo,
  getGroupInfo,
  receiveMessage,
  sendMessage,
} from "react-native-wifi-p2p";

import lightTheme from "./src/utils/theme";
import NavigationFlow from "./src/navigation";

const App = () => {
  useEffect(() => {
    (async () => {
      try {
        await initialize();
        // since it's required in Android >= 6.0
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Access to wi-fi P2P mode",
            message: "ACCESS_FINE_LOCATION",
          },
        );

        console.log(
          granted === PermissionsAndroid.RESULTS.GRANTED
            ? "You can use the p2p mode"
            : "Permission denied: p2p mode will not work",
        );

        subscribeOnPeersUpdates(console.log);
        console.log("1");
        subscribeOnConnectionInfoUpdates(console.log);
        console.log("2");
        subscribeOnThisDeviceChanged(console.log);
        console.log("3");

        const status = await startDiscoveringPeers();
        console.log("startDiscoveringPeers status: ", status);

        const chalJa = await getAvailablePeers();
        console.log(chalJa);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <SafeAreaProvider style={{ backgroundColor: lightTheme.colors.background }}>
      <NavigationFlow />
    </SafeAreaProvider>
  );
};

export default App;
