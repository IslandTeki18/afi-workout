import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, PrimaryButton } from "@/components";
import Textarea from "@/components/Textarea";
import { router } from "expo-router";

const AddExercise = () => {
  const [formObj, setFormObj] = useState({
    name: "",
    sets: "0",
    reps: "0",
    duration: "0",
    rest: "0",
    notes: "",
  });

  return (
    <SafeAreaView className="bg-white h-full">
      <Text className="text-lgTitle font-semibold mb-6 px-6">
        Create New Exercise
      </Text>
      <View className="px-6 pb-4">
        <Input
          placeholder="Enter exercise name"
          value={formObj.name}
          handleChangeText={(e) => setFormObj({ ...formObj, name: e })}
        />
      </View>
      <View className="flex-row px-6 pb-4">
        <View className="flex-row w-1/2 justify-between items-center text-left pr-2">
          <Text className="w-1/3">Sets</Text>
          <Input
            placeholder="10..."
            value={formObj.sets}
            handleChangeText={(e) => setFormObj({ ...formObj, sets: e })}
            keyboardType="number-pad"
            otherStyles="w-2/3"
          />
        </View>
        <View className="flex-row w-1/2 justify-between items-center text-left">
          <Text className="w-1/3">Reps</Text>
          <Input
            placeholder="10..."
            value={formObj.reps}
            keyboardType="number-pad"
            handleChangeText={(e) => setFormObj({ ...formObj, reps: e })}
            otherStyles="w-2/3"
          />
        </View>
      </View>
      <View className="px-6 pb-4">
        <Input
          placeholder="Duration..."
          value={formObj.duration}
          handleChangeText={(e) => setFormObj({ ...formObj, duration: e })}
        />
      </View>
      <View className="px-6 pb-4">
        <Input
          placeholder="Rest..."
          value={formObj.rest}
          handleChangeText={(e) => setFormObj({ ...formObj, rest: e })}
        />
      </View>
      <View className="px-6 pb-4">
        <Textarea
          placeholder="(Optional) Notes..."
          value={formObj.notes}
          handleChangeText={(e) => setFormObj({ ...formObj, notes: e })}
        />
      </View>
      <View className="px-6 pb-4">
        <PrimaryButton
          title="Create Exercise"
          handlePress={() => router.push("/create")}
          size="large"
        />
      </View>
    </SafeAreaView>
  );
};

export default AddExercise;
