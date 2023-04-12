import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>CounterScreen</Text>
      <Button
        title="INCREASE"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="DECREASE"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Counter:</Text>
      <Text>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
