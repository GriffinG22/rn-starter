import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go To Lists Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go To Images Screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go To Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go To Colors Screen"
        onPress={() => navigation.navigate("ColorGenerator")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
