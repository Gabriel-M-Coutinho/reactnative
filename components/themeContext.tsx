// ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "../constants/Colors";

const ThemeContext = createContext({
  theme: lightTheme,
  isDark: false,
});

export const ThemeProvider = ({ children }: any, p0: string) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
