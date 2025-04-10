import { CustomView } from "@/components/customView";
import { ThemeProvider } from "@/components/themeContext";
import { Stack } from "expo-router";
import "react-native-reanimated";
export default function RootLayout() {
  return (
    <ThemeProvider>
      <CustomView style={{ flex: 1 }}>
        <Stack
          initialRouteName="index"
          screenOptions={{
            animation: "fade",
            animationDuration: 200,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerTintColor: "transparent",
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="signup" options={{ headerShown: false }} />
          <Stack.Screen name="emailAuth" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </CustomView>
    </ThemeProvider>
  );
}
