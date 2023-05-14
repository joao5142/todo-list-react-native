import { useCallback } from "react";
import { Text, View, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Home } from "./src/screens/Home";

import { StyleSheet } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter: require("./src/assets/fonts/Inter-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
});
