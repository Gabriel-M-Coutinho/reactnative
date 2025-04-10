import React, { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CustomTextInput } from "@/components/customTextInput";
import { CustomView } from "@/components/customView";
import { CustomText } from "@/components/customText";
import { CustomTouchableOpacity } from "@/components/customTouchableOpacity";
import { router } from "expo-router";
import { createUser } from "@/api/api";
import { UserResponse } from "./types/user";

export default function LoginScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateForm = () => {
    setError("");

    if (!name.trim()) {
      setError("Name is required");
      return false;
    }

    if (!email.trim()) {
      setError("Email is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }

    if (password !== confirmPass) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };
  const handleSignUp = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      const userData = {
        name,
        email,
        password,
      };
      const response = await createUser(userData);
      console.log("API Response:", response);

      router.replace("/emailAuth");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomView style={styles.container}>
      <StatusBar hidden style="auto" />
      <CustomText type="title" style={styles.title}>
        Create Account
      </CustomText>

      {error ? <CustomText style={styles.errorText}>{error}</CustomText> : null}

      <CustomTextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        type="filled"
      />
      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        type="filled"
      />
      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        type="filled"
      />
      <CustomTextInput
        placeholder="Confirm Password"
        value={confirmPass}
        onChangeText={setConfirmPass}
        secureTextEntry
        type="filled"
      />
      <CustomTouchableOpacity
        type="primary"
        onPress={handleSignUp}
        disabled={loading}
      >
        <CustomText type="buttonText">
          {loading ? "Criando conta..." : "Sign up"}
        </CustomText>
      </CustomTouchableOpacity>

      <CustomTouchableOpacity
        type="link"
        onPress={() => router.push("/")}
        style={styles.loginButton}
      >
        <CustomText type="defaultBold">Já tem uma conta? Faça login</CustomText>
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
  errorText: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  loginButton: {
    marginTop: 15,
  },
});
