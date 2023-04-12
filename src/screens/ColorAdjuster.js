import { View } from "react-native";
import React, { useState } from "react";

import ColorControl from "../components/ColorControl";

const ColorAdjuster = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOR_INCREMENT = 10;

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorControl
        color="Red"
        onAdd={() => setColor("red", COLOR_INCREMENT)}
        onSub={() => setColor("red", -1 * COLOR_INCREMENT)}
      />
      <ColorControl
        color="Green"
        onAdd={() => setColor("green", COLOR_INCREMENT)}
        onSub={() => setColor("green", -1 * COLOR_INCREMENT)}
      />
      <ColorControl
        color="Blue"
        onAdd={() => setColor("blue", COLOR_INCREMENT)}
        onSub={() => setColor("blue", -1 * COLOR_INCREMENT)}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

export default ColorAdjuster;
