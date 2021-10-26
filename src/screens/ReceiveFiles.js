import React, { useEffect } from "react";
import { View } from "react-native";
import { getConnectionInfo, receiveMessage } from "react-native-wifi-p2p";

import { Button } from "../components";

const ReceiveFiles = () => {
  // TODO: test receive msg handler on screen mount
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await getConnectionInfo();
  //       const msg = await receiveMessage();
  //       console.log(msg);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   })();
  // }, []);

  const receiveTheMessage = () => {
    getConnectionInfo()
      .then((info) => console.log(info))
      .then(() => {
        receiveMessage()
          .then((msg) => console.log(msg))
          .catch((err) => console.error(err));
      });
  };

  return (
    <View>
      <Button onPress={receiveTheMessage}>Receive Files</Button>
    </View>
  );
};

export default ReceiveFiles;
