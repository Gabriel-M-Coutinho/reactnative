import React from "react";
import { StyleSheet } from "react-native";
import { CustomView } from "@/components/customView";
import { CustomText } from "@/components/customText";
import { AuthGuard } from "../../middewares/authGuard";
import { CustomTouchableOpacity } from "@/components/customTouchableOpacity";

export default function HomeScreen() {
  return (
    <AuthGuard>
      <CustomView style={styles.container}>
        <CustomView>
          <CustomText type="subtitle" style={styles.title}>
            Welcome Back!
          </CustomText>
          <CustomText>Here's what you can do today:</CustomText>
        </CustomView>

        {/* Feature 1 */}
        <CustomView style={styles.featureCard}>
          <CustomText type="subtitle">1. Quick Stats Dashboard</CustomText>
          <CustomText style={styles.quote}>
            "You've trained 3 days this week! Keep the streak going!"
          </CustomText>
          <CustomText>
            Calories burned, workouts completed, or progress photos.
          </CustomText>
        </CustomView>

        {/* Feature 2 */}
        <CustomView style={styles.featureCard}>
          <CustomText type="subtitle">2. Today's Workout Plan</CustomText>
          <CustomText style={styles.quote}>
            "Leg Day: Squats, Lunges, Deadlifts"
          </CustomText>
          <CustomText>Add a "Start Workout" button to jump in fast.</CustomText>
          <CustomTouchableOpacity
            type="primary"
            onPress={() => console.log("Workout started!")}
          >
            <CustomText type="buttonText">Start Workout</CustomText>
          </CustomTouchableOpacity>
        </CustomView>

        {/* Feature 3 */}
        <CustomView style={styles.featureCard}>
          <CustomText type="subtitle">3. Motivation Boost</CustomText>
          <CustomText style={styles.quote}>
            "The only bad workout is the one you didn't do."
          </CustomText>
          <CustomText>
            A shoutout to active friends: "Alex just PR'd their bench press! 🎉"
          </CustomText>
        </CustomView>

        {/* Feature 4 */}
        <CustomView style={styles.featureCard}>
          <CustomText type="subtitle">4. Class or Trainer Spotlight</CustomText>
          <CustomText style={styles.quote}>
            "Join today's 6PM HIIT class with Coach Maria!"
          </CustomText>
          <CustomText>
            Live updates if your gym offers real-time schedules.
          </CustomText>
        </CustomView>

        {/* Feature 5 */}
        <CustomView style={styles.featureCard}>
          <CustomText type="subtitle">5. Progress Tracker</CustomText>
          <CustomText style={styles.quote}>
            "You're 80% to your monthly goal!"
          </CustomText>
          <CustomText>Simple graphs for weight, reps, or endurance.</CustomText>
        </CustomView>
      </CustomView>
    </AuthGuard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
  featureCard: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    gap: 8,
  },
  quote: {
    fontStyle: "italic",
    marginVertical: 4,
  },
});
