import React from "react";
import { Stack } from "expo-router";

const WorkoutLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Workouts",
          headerTitle: "",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="create-workout"
        options={{
          title: "Create Workout",
          headerTitle: "",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="add-exercise"
        options={{
          title: "Add Exercise",
          headerTitle: "",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="exercise-details/[id]"
        options={{
          title: "Exercise Details",
          headerTitle: "",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="edit-exercise/exercise-edit"
        options={{
          title: "Edit Workout",
          headerTitle: "",
          headerBackTitle: "Back",
        }}
        
      />
    </Stack>
  );
};
export default WorkoutLayout;
