import { CustomText } from "@/components/customText";
import { CustomView } from "@/components/customView";
import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <CustomView style={styles.container}>
        <CustomText style={styles.title}>This screen doesn't exist.</CustomText>

        <Link href="/" style={styles.link}>
          <CustomText style={styles.linkText}>Go to home screen!</CustomText>
        </Link>
      </CustomView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
