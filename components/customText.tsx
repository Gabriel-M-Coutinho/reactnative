import { Text, type TextProps, StyleSheet } from "react-native";
import { useTheme } from "./themeContext";
import { darkTheme, lightTheme } from "@/constants/Colors";

export type CustomTextProps = TextProps & {
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "defaultBold"
    | "subtitle"
    | "link"
    | "buttonText";
};

export function CustomText({
  style,
  type = "default",
  ...rest
}: CustomTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        type === "buttonText"
          ? { color: "#FFFFFF" }
          : { color: theme.isDark ? darkTheme.text : lightTheme.text },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "defaultBold" ? styles.defaultBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "buttonText" ? styles.buttonText : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  defaultBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
  },
  buttonText: {
    lineHeight: 30,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
