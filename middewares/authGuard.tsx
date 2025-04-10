import React, { useEffect, useState } from "react";
import { CustomView } from "@/components/customView";
import { CustomText } from "@/components/customText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkAuth } from "@/api/api"; // Changed from verifyUser to checkAuth
import { router } from "expo-router";
import { ActivityIndicator } from "react-native";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [authStatus, setAuthStatus] = useState<
    "loading" | "authenticated" | "unauthenticated"
  >("loading");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = await AsyncStorage.getItem("access_token");

        if (!token) {
          setAuthStatus("unauthenticated");
          router.replace("/+not-found");
          return;
        }

        // Use checkAuth instead of verifyUser for token validation
        const isValid = await checkAuth(token);

        if (isValid) {
          setAuthStatus("authenticated");
        } else {
          await AsyncStorage.removeItem("access_token");
          setAuthStatus("unauthenticated");
          router.replace("/(tabs)");
        }
      } catch (error) {
        console.error("EmailAuth error:", error);
        setAuthStatus("unauthenticated");
        router.replace("/+not-found");
      }
    };

    verifyToken();
  }, []);

  if (authStatus === "loading") {
    return (
      <CustomView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" />
        <CustomText>Verifying session...</CustomText>
      </CustomView>
    );
  }

  if (authStatus === "unauthenticated") {
    return null; // or a custom "redirecting" message
  }

  return <>{children}</>;
};
