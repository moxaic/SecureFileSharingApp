import React, { useEffect } from "react";
import { View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import {
  getConnectionInfo,
  sendMessage,
  subscribeOnConnectionInfoUpdates,
  subscribeOnPeersUpdates,
  subscribeOnThisDeviceChanged,
} from "react-native-wifi-p2p";

import { Text } from "../components";
import { WINDOW } from "../utils/constants";

const JoinRoom = () => {
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    const handleConnection = async (e) => {
      console.log(e);
      const connInfo = await getConnectionInfo();
      // console.log(connInfo);
      // setTimeout(async () => {
      const msgMeta = await sendMessage("hello there!");
      console.log(msgMeta);
      // }, 1000);
    };

    subscribeOnConnectionInfoUpdates(handleConnection);
    subscribeOnPeersUpdates(handleConnection);
    subscribeOnThisDeviceChanged(handleConnection);
  }, []);

  return (
    <View style={{ height: WINDOW.HEIGHT }}>
      <Text
        textStyle={{
          fontSize: 40,
          lineHeight: 60,
          textAlign: "center",
          top: WINDOW.HEIGHT / 2 - headerHeight,
        }}>
        Waiting for connection...
      </Text>
    </View>
  );
};

export default JoinRoom;
