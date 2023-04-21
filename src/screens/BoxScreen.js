import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewStyleOne}></View>
      <View style={styles.viewStyleTwo}></View>
      <View style={styles.viewStyleThree}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 120,
    width: 390,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewStyleOne: {
    height: 40,
    width: 60,
    backgroundColor: "red",
  },
  viewStyleTwo: {
    height: 40,
    width: 60,
    backgroundColor: "green",
    top: 40,
  },
  viewStyleThree: {
    height: 40,
    width: 60,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
