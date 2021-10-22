import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { getFSInfo } from "react-native-fs";
import Svg, { Circle, Text as SvgText } from "react-native-svg";

import { WINDOW } from "../utils/constants";
import { Button, Text } from "../components";

const Home = ({ navigation }) => {
  const [freeSpacePercent, setFreeSpacePercent] = useState(null);
  const [totalSpace, setTotalSpace] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const { freeSpace, totalSpace } = await getFSInfo();
        setFreeSpacePercent(Math.round((freeSpace / totalSpace) * 100));
        setTotalSpace(Math.round(totalSpace / (1024 * 1024 * 1024)));
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const { colors } = useTheme();
  const radius = 100;
  const strokeWidth = 10;

  const getStrokeDashOffset = (percentFree) =>
    percentFree === null ? 0 : (percentFree * 2 * Math.PI * radius) / 100;

  return (
    <>
      <Svg
        {...{
          height: radius * 2 + strokeWidth,
          style: styles.svgBox,
          width: WINDOW.WIDTH,
        }}>
        <Circle
          {...{
            cx: WINDOW.WIDTH / 2,
            cy: radius + strokeWidth / 2,
            r: radius,
            fill: "none",
            stroke: colors.textBefore,
            strokeWidth,
          }}
        />
        <Circle
          {...{
            cx: WINDOW.WIDTH / 2,
            cy: radius + strokeWidth / 2,
            r: radius,
            fill: "none",
            stroke: colors.primary,
            strokeDasharray: 2 * Math.PI * radius,
            strokeDashoffset: getStrokeDashOffset(freeSpacePercent),
            strokeWidth,
          }}
        />
        <SvgText
          {...{
            fill: colors.notification,
            fontSize: 60,
            fontWeight: "bold",
            x: WINDOW.WIDTH / 2,
            y: radius + strokeWidth,
            textAnchor: "middle",
            transform: "translate(-20 15)",
          }}>
          {100 - freeSpacePercent}%
        </SvgText>
      </Svg>
      <View style={styles.memoryInfo}>
        <Text
          textStyle={{
            alignSelf: "flex-start",
            color: colors.notification,
            fontSize: 55,
            top: 15,
          }}>
          {Math.round(((100 - freeSpacePercent) * totalSpace) / 100)}
          <Text
            textStyle={{
              color: colors.notification,
              fontSize: 25,
            }}>
            GB
          </Text>
        </Text>
        <Text textStyle={{ color: colors.border, fontSize: 90 }}>/</Text>
        <Text
          textStyle={{
            alignSelf: "flex-end",
            bottom: 15,
            color: colors.border,
            fontSize: 40,
          }}>
          {totalSpace}
          <Text textStyle={{ color: colors.border, fontSize: 20 }}>GB</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        {[
          {
            onPress: () => navigation.navigate("CreateRoom"),
            title: "Create Room",
          },
          {
            onPress: () => navigation.navigate("JoinRoom"),
            title: "Join Room",
          },
        ].map(({ onPress, title }, key) => (
          <Button
            {...{
              buttonStyle: styles.button,
              key,
              onPress,
              textStyle: styles.buttonText,
            }}>
            {title}
          </Button>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  svgBox: {
    marginVertical: 40,
  },
  memoryInfo: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  buttonsContainer: {
    alignItems: "center",
  },
  button: {
    width: 0.7 * WINDOW.WIDTH,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
  },
});

export default Home;
