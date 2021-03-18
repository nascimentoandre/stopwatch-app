import React, { useState, useEffect } from "react";
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
  let [minutes, setMinutes] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(false);
  let timerSeconds: any, timerMinutes: any;

  const handlePlay: any = () => {
    setPlay(play => !play);
  }

  useEffect(() => {
    if (play) {
      timerSeconds = setInterval(() => {
        setSeconds(seconds =>  {
          if (seconds < 59) return seconds + 1;
          else return 1;
          })
      }, 1000);
    }
    return () => {
      clearInterval(timerSeconds);
    }
  }, [play, seconds])

  useEffect(() => {
    if (play) {
      timerMinutes = setInterval(() => {
        setMinutes(minutes => minutes + 1)
      }, 61000);
    }
    return () => {
      clearInterval(timerMinutes);
    }
  }, [play, minutes])

  return (
    <View>
      <Text style={[textStyle, {fontSize: 0.15*width}]}>{print(minutes)}:{print(seconds)}</Text>
      <TouchableHighlight onPress={handlePlay} style={styles.playBtn}>
        {
          play ?
          <FontAwesomeIcon icon={faStopCircle} color={colors.icon} size={0.15*width}/> :
          <FontAwesomeIcon icon={faPlayCircle} color={colors.icon} size={0.15*width}/> 
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