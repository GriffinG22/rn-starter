import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ComponentsScreen = () => {
  const name = "Griffin";

  return (
    <View>
      <Text style={styles.textLarge}>Getting started with react native!</Text>
      <Text style={styles.testSmall}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textLarge: {
    fontSize: 45,
  },
  textSmall: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
