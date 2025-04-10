import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { useTheme } from "./themeContext";
import { darkTheme, lightTheme } from "@/constants/Colors";

export type CustomTouchableOpacityProps = TouchableOpacityProps & {
  type?: "primary" | "secondary" | "container" | "link";
};

export function CustomTouchableOpacity({
  style,
  type = "primary",
  ...rest
}: CustomTouchableOpacityProps) {
  const theme = useTheme();

  const buttonStyles = {
    primary: {
      backgroundColor: theme.isDark ? darkTheme.primary : lightTheme.primary,
      color: "#fff",
      height: 50,
      borderRadius: 5,
      justifyContent: "center" as "center",
      alignItems: "center" as "center",
    },
    secondary: {
      backgroundColor: theme.isDark ? darkTheme.primary : lightTheme.primary,
      color: "#fff",
      padding: 16,
      borderRadius: 4,
    },
    container: {
      backgroundColor: theme.isDark
        ? darkTheme.foreground
        : lightTheme.foreground,
      borderColor: theme.isDark ? darkTheme.primary : lightTheme.primary,
      padding: 15,
      borderRadius: 8,
      marginBottom: 10,
      borderLeftWidth: 4,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },
    link: {
      borderColor: theme.isDark ? darkTheme.primary : lightTheme.primary,
      padding: 16,
      textDecorationLine: "underline",
      alignItems: "center" as "center",
    },
  };

  return (
    <TouchableOpacity
      style={[
        buttonStyles[type],
        style,
      ]}
      {...rest}
    />
  );
}
