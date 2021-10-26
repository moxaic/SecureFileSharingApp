import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useHeaderHeight } from "@react-navigation/elements";
import { useTheme } from "@react-navigation/native";
import { connect, getAvailablePeers } from "react-native-wifi-p2p";

import NoDeviceSvg from "../assets/images/no-device.svg";
import ShareLinkSvg from "../assets/images/share-link.svg";
import SmartphoneSvg from "../assets/images/smartphone.svg";
import { WINDOW } from "../utils/constants";
import lightTheme from "../utils/theme";
import { Button, Text } from "../components";

const CreateRoom = ({ navigation }) => {
  const [peers, setPeers] = useState(null);
  const [minHeight, setMinHeight] = useState(0);
  const [selectedDevices, setSelectedDevices] = useState([]);
  const { colors } = useTheme();
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    (async () => {
      try {
        const pr = await getAvailablePeers();
        setPeers(pr.devices);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const getMinHeight = ({
    nativeEvent: {
      layout: { y },
    },
  }) => {
    const availableHeight = WINDOW.HEIGHT - y;
    setMinHeight(availableHeight - headerHeight - 44);
  };

  const onPressHandler = async () => {
    try {
      await connect(selectedDevices[0].deviceAddress);
      navigation.navigate("ReceiveFiles");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ShareLinkSvg style={{ marginVertical: 30 }} width={WINDOW.WIDTH} />
      <Text textStyle={{ textAlign: "center" }}>Available Devices</Text>
      <View onLayout={getMinHeight} style={{ minHeight, paddingBottom: 40 }}>
        {peers === null ? (
          <ActivityIndicator
            animating={peers === null}
            color={colors.primary}
            size={160}
            style={{
              bottom: 0,
              left: 0,
              position: "absolute",
              right: 0,
              top: 0,
            }}
          />
        ) : peers.length === 0 ? (
          <>
            <Text
              textStyle={{
                color: colors.error,
                fontSize: 30,
                fontWeight: "600",
                left: 0,
                position: "absolute",
                right: 0,
                textAlign: "center",
                top: 25,
              }}>
              No devices nearby
            </Text>
            <NoDeviceSvg
              style={{ alignSelf: "center", top: 80 }}
              height={minHeight - 80}
            />
          </>
        ) : (
          peers.map((peer, key) => (
            <View style={styles.deviceInfo} {...{ key }}>
              <SmartphoneSvg fill={colors.card} height={27} />
              <Text textStyle={{ marginHorizontal: 15 }}>
                {peer.deviceName}
              </Text>
              <BouncyCheckbox
                disableText={true}
                fillColor={colors.primary}
                iconStyle={{
                  borderColor: colors.primary,
                  borderWidth: 2,
                }}
                onPress={(isChecked) => {
                  if (isChecked) {
                    setSelectedDevices((prev) => [...prev, peer]);
                  }
                }}
                size={27}
                style={{ marginLeft: "auto" }}
                unfillColor={colors.background}
              />
            </View>
          ))
        )}
      </View>
      <Button
        buttonStyle={{
          backgroundColor:
            peers === null || peers.length === 0 || selectedDevices.length === 0
              ? colors.disabled
              : colors.primary,
          alignSelf: "center",
          width: 0.7 * WINDOW.WIDTH,
        }}
        disabled={
          peers === null || peers.length === 0 || selectedDevices.length === 0
        }
        onPress={onPressHandler}
        textStyle={{
          color:
            peers === null || selectedDevices.length === 0
              ? colors.textDark
              : colors.text,
        }}>
        Create
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  deviceInfo: {
    alignItems: "center",
    alignSelf: "center",
    borderColor: lightTheme.colors.primary,
    borderRadius: 999,
    borderWidth: 2,
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 23,
    paddingVertical: 15,
    width: 0.85 * WINDOW.WIDTH,
  },
});

export default CreateRoom;

/*
{"devices": [{"deviceAddress": "e0:37:bf:25:d8:c1", "deviceName": "KLV-32W622F", "isGroupOwner": true, "primaryDeviceType": "7-0050F204-1", "secondaryDeviceType": null, "status": 3}]}
*/
