import { View, Text } from "react-native";
import React from "react";

type RecentWorkoutCardProps = {
  workoutName?: string;
  workoutType?: string;
  numOfExercises?: number;
  date?: string;
  duration?: string;
  time?: string;
  handePress?: () => void;
};

export const RecentWorkoutCard = (props: RecentWorkoutCardProps) => {
  return (
    <View className="bg-secondary rounded-lg p-3 w-full min-h-[152px]">
      <View className="flex-row justify-between items-start">
        <View className="gap-2 w-1/2">
          <Text className="text-white text-mdTitle font-semibold">
            {props.workoutName || "n / a"}
          </Text>
          <Text className="text-white text-s,=mTitle font-normal">
            Workout Type: {props.workoutType || "n / a"}
          </Text>
          <Text className="text-white text-s,=mTitle font-normal">
            Num. of Exercises: {props.numOfExercises || 0}
          </Text>
        </View>
        <View className="w-1/2 items-end">
          <Text className="text-white text-s,=mTitle font-normal">
            Date: {props.date || "n / a"}
          </Text>
        </View>
      </View>
      <View className="justify-between items-center flex-row mt-auto">
        <Text className="text-white text-s,=mTitle font-normal">
          Duration: {props.duration || "n / a"}
        </Text>
        <Text className="text-white text-s,=mTitle font-normal">
          Time: {props.time || "n / a"}
        </Text>
      </View>
    </View>
  );
};
