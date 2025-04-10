import { StyleSheet, TextInput, type TextInputProps } from "react-native";
import { useTheme } from "./themeContext";
import { darkTheme, lightTheme } from "@/constants/Colors";

export type CustomTextInputProps = TextInputProps & {
  type?: "outlined" | "filled";
};

export function CustomTextInput({
  style,
  type = "outlined",
  ...rest
}: CustomTextInputProps) {
  const theme = useTheme();

  const inputStyles = {
    outlined: {
      height: 50,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 5,
      marginBottom: 15,
      paddingHorizontal: 10,
    },
    filled: { 
      backgroundColor: theme.isDark ? darkTheme.foreground : lightTheme.foreground,
      color: theme.isDark ? darkTheme.text : lightTheme.text,
      height: 50,
      borderRadius: 5,
      marginBottom: 15,
      paddingHorizontal: 10,
    },
  };

  return (
    <TextInput
      placeholderTextColor={theme.isDark ? darkTheme.text : lightTheme.text}
      style={[
        {
          backgroundColor: theme.isDark
            ? darkTheme.background
            : lightTheme.background,
          borderColor: theme.isDark ? darkTheme.border : lightTheme.border,
          color: theme.isDark ? darkTheme.text : lightTheme.text,
        },
        type === "outlined" ? inputStyles.outlined : undefined,
        type === "filled" ? inputStyles.filled : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

