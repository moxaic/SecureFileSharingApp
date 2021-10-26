import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import {
  getConnectionInfo,
  sendMessage,
  subscribeOnConnectionInfoUpdates,
  subscribeOnPeersUpdates,
  subscribeOnThisDeviceChanged,
} from "react-native-wifi-p2p";

import Waiting from "../assets/images/waiting.svg";
import { WINDOW } from "../utils/constants";
import { Text, Button } from "../components";

const JoinRoom = () => {
  const [groupFormed, setGroupFormed] = useState(false);
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    const handleConnection = /* async */ (e) => {
      console.log("handleConnection\n", e);
    };

    subscribeOnConnectionInfoUpdates(handleConnection);
    subscribeOnPeersUpdates(handleConnection);
    subscribeOnThisDeviceChanged(handleConnection);
  }, []);

  const sendTheMessage = /* async */ () => {
    // TODO: test using async await
    // try {
    //   console.log(await getConnectionInfo());
    //   const metaInfo = await sendMessage("testing...");
    //   console.log(metaInfo);
    // } catch (err) {
    //   console.error(err);
    // }

    getConnectionInfo()
      .then((info) => console.log(info))
      .then(() => {
        sendMessage("hey hey")
          .then((metaInfo) => console.log(metaInfo))
          .catch((err) => console.log(err));
      });
  };

  return (
    <View
      style={{
        height: WINDOW.HEIGHT - headerHeight,
        justifyContent: "center",
      }}>
      <Text
        textStyle={{
          fontSize: 40,
          lineHeight: 60,
          textAlign: "center",
        }}>
        Waiting for someone to connect...
      </Text>
      <Waiting width={WINDOW.WIDTH} />
      <Button onPress={sendTheMessage}>Send Files</Button>
    </View>
  );
};

export default JoinRoom;
