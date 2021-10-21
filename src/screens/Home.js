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
  const radius = 70;
  const strokeWidth = 14;

  const getStrokeDashOffset = (percentFree) =>
    percentFree === null ? 0 : (percentFree * 2 * Math.PI * radius) / 100;

  return (
    <>
      <Svg
        height={radius * 2 + strokeWidth}
        style={styles.svgBox}
        width={WINDOW.WIDTH}>
        <Circle
          cx={WINDOW.WIDTH / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          fill="none"
          stroke={colors.textBefore}
          {...{ strokeWidth }}
        />
        <Circle
          cx={WINDOW.WIDTH / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          fill="none"
          stroke={colors.primary}
          strokeDasharray={2 * Math.PI * radius}
          strokeDashoffset={getStrokeDashOffset(freeSpacePercent)}
          {...{ strokeWidth }}
        />
        <SvgText
          fill={colors.card}
          fontSize="50"
          fontWeight="bold"
          x={WINDOW.WIDTH / 2}
          y={radius + strokeWidth}
          textAnchor="middle"
          transform="translate(-20 10)">
          {100 - freeSpacePercent}%
        </SvgText>
      </Svg>
      <Text>{totalSpace}GB</Text>
      <View style={styles.buttonsContainer}>
        {[
          {
            onPress: () => navigation.navigate("Send"),
            title: "Send files",
          },
          {
            onPress: () => navigation.navigate("Recieve"),
            title: "Receive files",
          },
        ].map(({ onPress, title }, key) => (
          <Button {...{ key, extraStyles: styles.button, onPress }}>
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    height: 200,
    width: WINDOW.WIDTH / 2 - 20,
  },
});

export default Home;
