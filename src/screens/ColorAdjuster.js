import { View } from "react-native";
import React, { useReducer } from "react";

import ColorControl from "../components/ColorControl";

const COLOR_INCREMENT = 10;
const COLOR_DECREMENT = -10;

const initialState = { red: 0, green: 0, blue: 0 };

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const ColorAdjuster = () => {
  const [{ red, green, blue }, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <ColorControl
        color="Red"
        onAdd={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onSub={() =>
          dispatch({ colorToChange: "red", amount: COLOR_DECREMENT })
        }
      />
      <ColorControl
        color="Green"
        onAdd={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onSub={() =>
          dispatch({ colorToChange: "green", amount: COLOR_DECREMENT })
        }
      />
      <ColorControl
        color="Blue"
        onAdd={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onSub={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_DECREMENT })
        }
      />
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
