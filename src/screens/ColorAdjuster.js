import { View } from "react-native";
import React, { useReducer } from "react";

import ColorControl from "../components/ColorControl";

const COLOR_INCREMENT = 10;
const COLOR_DECREMENT = -10;

const initialState = { red: 0, green: 0, blue: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
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
        onAdd={() => dispatch({ type: "change_red", payload: COLOR_INCREMENT })}
        onSub={() => dispatch({ type: "change_red", payload: COLOR_DECREMENT })}
      />
      <ColorControl
        color="Green"
        onAdd={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onSub={() =>
          dispatch({ type: "change_green", payload: COLOR_DECREMENT })
        }
      />
      <ColorControl
        color="Blue"
        onAdd={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onSub={() =>
          dispatch({ type: "change_blue", payload: COLOR_DECREMENT })
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
