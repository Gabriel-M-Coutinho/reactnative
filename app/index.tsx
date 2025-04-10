import React, { useState } from "react";
import { StyleSheet, Alert, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CustomView } from "@/components/customView";
import { CustomText } from "@/components/customText";
import { CustomTextInput } from "@/components/customTextInput";
import { CustomTouchableOpacity } from "@/components/customTouchableOpacity";
import { router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    router.push("/(tabs)");
  };

  const handleRegister = () => {
    router.push("/signup");
  };

  return (
    <CustomView style={styles.container}>
      <StatusBar hidden style="auto" />
      <CustomText type="title" style={styles.title}>
        Login
      </CustomText>
      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        type="filled"
      />

      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        type="filled"
      />

      <CustomTouchableOpacity onPress={handleLogin}>
        <CustomText type="buttonText">Log In</CustomText>
      </CustomTouchableOpacity>

      <View style={styles.footer}>
        {/*
        <CustomTouchableOpacity type="link" onPress={undefined}>
          <CustomText type="defaultBold">Forgot Password?</CustomText>
        </CustomTouchableOpacity>
        */}
        <CustomTouchableOpacity type="link" onPress={handleRegister}>
          <CustomText type="defaultBold">Create New Account</CustomText>
        </CustomTouchableOpacity>
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
});
