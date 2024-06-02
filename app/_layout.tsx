import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),

    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Italic": require("../assets/fonts/Roboto-Italic.ttf"),
    "Roboto-BoldItalic": require("../assets/fonts/Roboto-BoldItalic.ttf"),

    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("../assets/fonts/Roboto-LightItalic.ttf"),

    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("../assets/fonts/Roboto-MediumItalic.ttf"),

    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("../assets/fonts/Roboto-ThinItalic.ttf"),

    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("../assets/fonts/Roboto-BlackItalic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="/workout/[workout]" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default RootLayout;
