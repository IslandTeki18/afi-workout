import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, RecentWorkoutCard } from "@/components";
import { router } from "expo-router";

const WorkoutHome = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="gap-2">
        <View className="justify-center items-center min-h-[15vh] px-6 ">
          <PrimaryButton title="Create New Workout" size="large" handlePress={() => router.push("/create-workout")} />
        </View>
        <View className="min-h-[10vh] px-6 pb-4">
          <Text className="text-mdTitle font-bold text-left mb-2">
            Recent Workouts
          </Text>
          <RecentWorkoutCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkoutHome;
