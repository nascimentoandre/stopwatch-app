import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import colors from "../config/colors";
import bar from "../config/barHeight";
import Bar from "../components/Bar";
import Alarm from "../components/Alarm";
import Timer from "../components/Stopwatch";

const Home: React.FC = () => {
  const [screen, setScreen] = useState<boolean>(true);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainApp}>
        {screen ? <Alarm textStyle={styles.text} /> : <Timer textStyle={styles.text} /> }
      </View>
      <StatusBar style="auto" />
      <Bar state={screen} setState={setScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mainApp: {
    flex: 1-bar.barHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 50,
    color: colors.text,
  },
  special: {
    color: colors.icon,
    fontSize: 30,    
    fontFamily: "Poppins_400Regular",
    fontWeight: "700"
  }
})

export default Home;