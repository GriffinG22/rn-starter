import { View, Text, StyleSheet } from "react-native";
import React from "react";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen Demo Page</Text>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageRating="7"
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        imageRating="4"
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageRating="6"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
