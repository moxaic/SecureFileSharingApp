import React, { useEffect } from "react";
import { PermissionsAndroid, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  initialize,
  startDiscoveringPeers,
  subscribeOnConnectionInfoUpdates,
  subscribeOnThisDeviceChanged,
  subscribeOnPeersUpdates,
} from "react-native-wifi-p2p";

import lightTheme from "./src/utils/theme";
import Navigation from "./src/navigation";

const App = () => {
  useEffect(() => {
    // PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    //   {
    //     title: "Access to read",
    //     message: "READ_EXTERNAL_STORAGE",
    //   },
    // )
    //   .then((granted) => {
    //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //       console.log("You can use read operation");
    //     } else {
    //       console.log("Read operation permission denied");
    //     }
    //   })
    //   .then(() => {
    //     return PermissionsAndroid.request(
    //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //       {
    //         title: "Access to write",
    //         message: "WRITE_EXTERNAL_STORAGE",
    //       },
    //     );
    //   });
    (async () => {
      try {
        await initialize();
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

        // subscribeOnPeersUpdates(console.log);
        // subscribeOnConnectionInfoUpdates(console.log);
        // subscribeOnThisDeviceChanged(console.log);

        const status = await startDiscoveringPeers();
        console.log("startDiscoveringPeers status: ", status);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <SafeAreaProvider style={{ backgroundColor: lightTheme.colors.background }}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        barStyle="dark-content"
        translucent={true}
      />
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
