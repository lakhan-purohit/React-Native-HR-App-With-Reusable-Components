import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import ThemeProvider from "../Utils/theme/themeContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider >
        <RootSiblingParent >
          <StatusBar style="dark" />

          <Stack
            screenOptions={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          >
            <Stack.Screen
              name="(onboarding)/index"
              options={{ headerShown: false }}
            />
          </Stack>
        </RootSiblingParent>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

// To Create the release build in the EXPO
// eas build -p android --profile preview

// To generate the native code (android / Ios derectories)
// npx expo prebuild

// To run expo
// npx expo start -c --tunnel

// To lunch call
// Don't forget added to Info.plist ->

// <key>LSApplicationQueriesSchemes</key>
// <array>
//   <string>tel</string>
//   <string>telprompt</string>
// </array>
