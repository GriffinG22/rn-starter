import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen 1</Text>
      <Text style={styles.textStyle}>BoxScreen 2</Text>
      <Text style={styles.textStyle}>BoxScreen 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
    textAlign: "center",
  },
});

export default BoxScreen;
