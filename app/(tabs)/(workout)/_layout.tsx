import React from "react";
import { Stack } from "expo-router";

const WorkoutLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Workouts", headerShown: false }}
      />
      <Stack.Screen
        name="create"
        options={{
          title: "Create Workout",
          headerTitle: "",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
};
export default WorkoutLayout;
