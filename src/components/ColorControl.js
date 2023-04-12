import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const ColorControl = ({ color, onAdd, onSub }) => {
  return (
    <View>
      <Text style={styles.text}>{color}</Text>
      <Button
        title={`More ${color}`}
        onPress={() => onAdd()}
        style={styles.text}
      />
      <Button
        title={`Less ${color}`}
        onPress={() => onSub()}
        style={styles.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textTransform: "uppercase",
  },
});

export default ColorControl;
