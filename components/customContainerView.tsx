import { View, type ViewProps } from "react-native";
import { useTheme } from "./themeContext";
import { darkTheme, lightTheme } from "@/constants/Colors";

type CustomContainerViewProps = ViewProps & {
  lightTheme?: string;
  darkTheme?: string;
};

export function CustomContainerView({
  style,
  ...otherProps
}: CustomContainerViewProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        style,
        {
          backgroundColor: theme.isDark
            ? darkTheme.foreground
            : lightTheme.foreground,
        },
      ]}
      {...otherProps}
    />
  );
}
