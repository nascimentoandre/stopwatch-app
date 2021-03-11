import React from "react";
import { View, Text } from "react-native";

interface Props {
  textStyle: object,
}

const Timer: React.FC<Props> = ({ textStyle }) => {
  return (
    <View>
      <Text style={textStyle}>Stopwatch</Text>
    </View>
  );
}

export default Timer;