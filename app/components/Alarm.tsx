import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  textStyle: object,
}
const Alarm: React.FC<Props> = ({ textStyle }) => {
  return (
    <View>
      <Text style={textStyle}>Alarm</Text>
    </View>
  );
}

export default Alarm;