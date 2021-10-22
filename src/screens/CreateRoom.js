import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { createGroup, getAvailablePeers } from "react-native-wifi-p2p";
import { useTheme } from "@react-navigation/native";

import ShareLinkSvg from "../assets/images/share-link.svg";
import SmartphoneSvg from "../assets/images/smartphone.svg";
import { WINDOW } from "../utils/constants";
import lightTheme from "../utils/theme";
import { Button, Text } from "../components";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreateRoom = () => {
  // const [peers, setPeers] = useState([]);
  const [peers, setPeers] = useState([
    { deviceName: "Some device's weird name" },
    { deviceName: "not a weird name" },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const pr = await getAvailablePeers();
        console.log(pr);
        // setPeers(pr.devices);
        setPeers([
          { deviceName: "Some device's weird name" },
          { deviceName: "not a weird name" },
        ]);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const { colors } = useTheme();

  const onPressHandler = async () => {
    try {
      const groupInfo = await createGroup();
      console.log(groupInfo);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Text
        textStyle={{ fontSize: 20, fontWeight: "600", textAlign: "center" }}>
        Available devices
      </Text>
      <ShareLinkSvg {...{ style: styles.shareLinkSvg, width: WINDOW.WIDTH }} />
      {peers.map((peer, key) => (
        <TouchableOpacity {...{ key }}>
          <View {...{ style: styles.deviceInfo }}>
            <SmartphoneSvg {...{ fill: colors.textAfter, height: 27 }} />
            <Text textStyle={{ marginLeft: 15 }}>{peer.deviceName}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  shareLinkSvg: {
    marginVertical: 40,
  },
  deviceInfo: {
    alignItems: "center",
    alignSelf: "center",
    borderColor: lightTheme.colors.primary,
    borderRadius: 999,
    borderWidth: 2,
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: 0.85 * WINDOW.WIDTH,
  },
});

export default CreateRoom;
