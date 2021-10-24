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

import { WINDOW } from "../utils/constants";
import { Text, Button } from "../components";

const JoinRoom = () => {
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    const handleConnection = async (e) => {
      console.log("handleConnection\n", e);
      // const connInfo = await getConnectionInfo();
      // console.log(connInfo);
      // setTimeout(async () => {
      // const msgMeta = await sendMessage("hello there!");
      // console.log(msgMeta);
      // }, 1000);
    };

    subscribeOnConnectionInfoUpdates(handleConnection);
    subscribeOnPeersUpdates(handleConnection);
    subscribeOnThisDeviceChanged(handleConnection);
  }, []);

  const sendTheFuckinMessage = () => {
    sendMessage()
      .then((metaInfo) => console.log(metaInfo))
      .catch((err) => console.log(err));
  };

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
      <Button onPress={sendTheFuckinMessage}>Send Files</Button>
    </View>
  );
};

export default JoinRoom;
