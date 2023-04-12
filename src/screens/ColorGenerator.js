import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import React, { useState } from "react";

const ColorGenerator = () => {
  const [colors, setColors] = useState([]);

  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  };

  return (
    <View>
      <Button
        title="Generate New Color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={colors}
        renderItem={({ item }) => (
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: item,
            }}
          ></View>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorGenerator;
