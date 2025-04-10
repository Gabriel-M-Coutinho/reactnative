import React from "react";
import { Tabs } from "expo-router";
import { useTheme } from "@/components/themeContext";
import { darkTheme, lightTheme } from "@/constants/Colors";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.isDark
            ? darkTheme.background
            : lightTheme.background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabelStyle: {
            color: theme.isDark ? darkTheme.text : lightTheme.text,
          },
          tabBarIconStyle: {
            color: theme.isDark ? darkTheme.primary : lightTheme.primary,
          },
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          tabBarLabelStyle: {
            color: theme.isDark ? darkTheme.text : lightTheme.text,
          },
          tabBarIconStyle: {
            color: theme.isDark ? darkTheme.primary : lightTheme.primary,
          },
        }}
      />
    </Tabs>
  );
}
