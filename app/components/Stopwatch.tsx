import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useDimensions } from '@react-native-community/hooks';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"; 
import { faPlayCircle, faStopCircle } from "@fortawesome/free-solid-svg-icons";
import colors from "../config/colors";

interface Props {
  textStyle: object,
}

const print: ((num: number) => string)  = (num: number) => {
  if (num < 10) return '0'.concat(num.toString());
  return num.toString();
}

const Timer: React.FC<Props> = ({ textStyle }) => {
  const { window: { width }} = useDimensions();

  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(true);

  const handlePlay: any = () => {
    setPlay(play => !play);
    console.log(play);
    // add functionality
  }

  return (
    <View>
      <Text style={[textStyle, {fontSize: 0.15*width}]}>{print(minutes)}:{print(seconds)}</Text>
      <TouchableHighlight onPress={handlePlay} style={styles.playBtn}>
        {
          play ?
          <FontAwesomeIcon icon={faPlayCircle} color={colors.icon} size={0.15*width}/> :
          <FontAwesomeIcon icon={faStopCircle} color={colors.icon} size={0.15*width}/> 
        }
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  playBtn: {
    alignItems: "center",
    marginTop: 15,
  }
})

export default Timer;