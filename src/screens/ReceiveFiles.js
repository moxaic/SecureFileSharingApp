import React from "react";
import { View } from "react-native";
import { receiveMessage } from "react-native-wifi-p2p";

import { Button } from "../components";

const ReceiveFiles = () => {
  const receiveTheFuckinMessage = () => {
    receiveMessage()
      .then((msg) => console.log(msg))
      .catch((err) => console.error(err));
  };

  return (
    <View>
      <Button onPress={receiveTheFuckinMessage}>Receive Files</Button>
    </View>
  );
};

export default ReceiveFiles;
