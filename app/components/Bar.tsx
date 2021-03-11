import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import bar from "../config/barHeight";
import { faClock, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../config/colors";

interface Props {
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>> 
}

const Bar: React.FC<Props> = ({ state, setState }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => setState(true)}>
        <FontAwesomeIcon color={ state ? colors.icon : colors.icon2 } icon={ faClock } size={25} />
      </TouchableHighlight> 
      <TouchableHighlight onPress={() => setState(false)}>
        <FontAwesomeIcon color={ state ? colors.icon2 : colors.icon } icon={ faStopwatch } size={25} />
      </TouchableHighlight>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: bar.barHeight,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    backgroundColor: "#161616",
    alignSelf: "flex-end",
    width: "100%",
  }
});

export default Bar;