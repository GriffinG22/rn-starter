import { View, Text, StyleSheet, Button } from "react-native";
import React, { useReducer } from "react";

const initialState = { counter: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "add_one":
      return { ...state, counter: state.counter + action.payload };
    case "subtract_one":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [{ counter }, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Text>CounterScreen</Text>
      <Button
        title="INCREASE"
        onPress={() => dispatch({ type: "add_one", payload: 1 })}
      />
      <Button
        title="DECREASE"
        onPress={() => dispatch({ type: "subtract_one", payload: -1 })}
      />
      <Text>Counter:</Text>
      <Text>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
