import {
  View,
  Text,
} from "react-native";
import React, { useState } from "react";
import {
  Input,
  PrimaryButton,
  SecondaryButton,
  Select,
  ExerciseList,
} from "@/components";
import { router } from "expo-router";

const fakeList = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
];

const CreatePage = () => {
  const [workoutName, setWorkoutName] = useState<string>("");
  const [workoutType, setWorkoutType] = useState<string>("");

  return (
    <View className="h-full bg-white">
      <View className="px-6 z-10 pb-4">
        <Text className="text-lgTitle font-semibold mb-6">
          Create New Workout
        </Text>
        <Input
          placeholder="Enter workout name"
          value={workoutName}
          handleChangeText={(e) => setWorkoutName(e)}
          otherStyles="mb-2"
        />
        <Select
          list={fakeList}
          placeholder="Select Type"
          handleSelection={(selection) => setWorkoutType(selection)}
          otherStyles="mb-4 z-20"
        />
        <SecondaryButton
          title="Add Exercise"
          size="small"
          handlePress={() => router.push("/add-exercise")}
        />
      </View>
      <View className="px-6 max-h-[37vh]">
        <ExerciseList />
      </View>
      <View className="px-6 py-3">
        <PrimaryButton
          disabled
          title="Review Workout"
          size="large"
          handlePress={() => {}}
        />
      </View>
    </View>
  );
};

export default CreatePage;
