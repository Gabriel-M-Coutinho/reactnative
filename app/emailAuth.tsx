import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CustomView } from "@/components/customView";
import { CustomText } from "@/components/customText";
import { CustomTextInput } from "@/components/customTextInput";
import { CustomTouchableOpacity } from "@/components/customTouchableOpacity";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { verifyUser } from "../api/api";

export default function EmailAuth() {
  const [token, setToken] = useState("");

  const handleAuthenticate = async (token: string) => {
    try {
      const response = await verifyUser(token);
      const accessToken = response.access_token;

      await AsyncStorage.setItem("access_token", accessToken);

      router.replace("/");
    } catch (error) {
      console.error("An error occurred during emailAuth:", error);
    }
  };

  return (
    <CustomView style={styles.container}>
      <StatusBar hidden style="auto" />
      <CustomText type="title" style={styles.title}>
        Confirm Email
      </CustomText>

      <CustomTextInput
        placeholder="Token"
        value={token}
        onChangeText={setToken}
        autoCapitalize="none"
        keyboardType="numeric"
        type="filled"
        style={{ textAlign: "center" }}
      />

      <CustomTouchableOpacity onPress={() => handleAuthenticate(token)}>
        <CustomText type="buttonText">Confirm</CustomText>
      </CustomTouchableOpacity>
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
});
