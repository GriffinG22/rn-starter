import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ImageDetail = ({ title, imageSource, imageRating }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {imageRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
