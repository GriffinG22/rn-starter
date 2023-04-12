import { View } from "react-native";
import React, { useState } from "react";

import ColorControl from "../components/ColorControl";

const ColorAdjuster = () => {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  const increaseRed = () => {
    if (red <= 245) {
      setRed(red + 10);
    }

    return;
  };

  const increaseGreen = () => {
    if (green <= 245) {
      setGreen(green + 10);
    }

    return;
  };

  const increaseBlue = () => {
    if (blue <= 245) {
      setBlue(blue + 10);
    }

    return;
  };

  const decreaseRed = () => {
    if (red >= 10) {
      setRed(red - 10);
    }

    return;
  };

  const decreaseGreen = () => {
    if (green >= 10) {
      setGreen(green - 10);
    }

    return;
  };

  const decreaseBlue = () => {
    if (blue >= 10) {
      setBlue(blue - 10);
    }

    return;
  };

  return (
    <View>
      <ColorControl color="Red" onAdd={increaseRed} onSub={decreaseRed} />
      <ColorControl color="Green" onAdd={increaseGreen} onSub={decreaseGreen} />
      <ColorControl color="Blue" onAdd={increaseBlue} onSub={decreaseBlue} />
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
