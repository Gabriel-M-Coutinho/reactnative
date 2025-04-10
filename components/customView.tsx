import { View, type ViewProps } from "react-native";
import { useTheme } from "./themeContext";
import { darkTheme, lightTheme } from "@/constants/Colors";

type CustomViewProps = ViewProps & {
  lightTheme?: string;
  darkTheme?: string;
};

export function CustomView({ style, ...otherProps }: CustomViewProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        style,
        {
          backgroundColor: theme.isDark
            ? darkTheme.background
            : lightTheme.background,
        },
      ]}
      {...otherProps}
    />
  );
}
