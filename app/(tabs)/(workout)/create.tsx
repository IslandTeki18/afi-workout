import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, PrimaryButton, SecondaryButton, Select } from "@/components";

const fakeList = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
];

const CreatePage = () => {
  const [workoutName, setWorkoutName] = useState<string>("");
  const [workoutType, setWorkoutType] = useState<string>("");

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="px-6 z-10">
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
          handlePress={() => {}}
        />
      </View>
      <ScrollView></ScrollView>
      <View className="px-6">
        <PrimaryButton disabled title="Review Workout" size="large" handlePress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default CreatePage;