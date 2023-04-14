import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

const TextInputScreen = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Name"
        onChangeText={(newText) => setText(newText)}
        value={text}
      />
      {text.length > 4 ? null : (
        <Text style={styles.text}>Password must be 5 characters long</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    borderColor: "black",
    borderWidth: 1,
  },

  text: {
    marginLeft: 15,
    marginRight: 15,
    textTransform: "uppercase",
  },
});

export default TextInputScreen;
