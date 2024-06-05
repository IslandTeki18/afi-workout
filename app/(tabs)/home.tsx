import { Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, RecentWorkoutCard } from "@/components";
import { router } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="gap-4">
        <View className="flex-row justify-between items-center min-h-[10vh] px-6">
          <View className="gap-2 w-1/2">
            <Text className="text-mdTitle font-normal text-left">Welcome,</Text>
            <Text className="text-lgTitle font-bold text-left">John Doe</Text>
          </View>
          <View className="w-1/2 items-end">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              className="w-11 h-11 rounded-full"
            />
          </View>
        </View>
        <View className="items-center min-h-[10vh] px-6">
          <PrimaryButton
            title="Pick a Workout"
            handlePress={() => router.push("(workout)")}
            size="large"
          />
        </View>
        <View className="min-h-[10vh] px-6">
          <Text className="text-mdTitle font-bold text-left mb-2">
            Recent Workouts
          </Text>
          <RecentWorkoutCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
