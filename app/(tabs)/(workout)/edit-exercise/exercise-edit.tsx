import { View, Text } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Input, SecondaryButton } from "@/components";
import Textarea from "@/components/Textarea";

export type Exercise = {
  id: number | string | string[] | undefined;
  name: string | string[] | undefined;
  sets: number | string | string[] | undefined;
  reps: number | string | string[] | undefined;
  duration: string | string[] | undefined;
  rest: string | string[] | undefined;
  notes?: string | string[] | undefined;
};

const ExerciseEdit = () => {
  const params = useLocalSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [exercise, setExercise] = useState<Exercise>({
    id: params.id,
    name: params.name,
    sets: params.sets,
    reps: params.reps,
    duration: params.duration,
    rest: params.rest,
    notes: params.notes,
  });

  function handleExerciseChange() {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      router.back();
    }, 3000);
  }

  return (
    <View className="h-full px-6 bg-white">
      <Text className="text-xlTitle font-semibold pt-4 pb-6">
        <Text className="font-normal">Edit:</Text>
        {exercise.name}
      </Text>
      <Input
        value={exercise.name}
        placeholder="Exercise Name"
        handleChangeText={(e) => setExercise({ ...exercise, name: e })}
        otherStyles="pb-6"
      />
      <View className="flex flex-row justify-between pb-6">
        <View className="flex-row w-1/2 justify-between items-center text-left pr-2">
          <Text className="font-bold w-1/3">Sets</Text>
          <Input
            placeholder="10..."
            value={exercise.sets}
            handleChangeText={(e) => setExercise({ ...exercise, sets: e })}
            keyboardType="number-pad"
            otherStyles="w-2/3"
          />
        </View>
        <View className="flex-row w-1/2 justify-between items-center text-left">
          <Text className="font-bold w-1/3">Reps</Text>
          <Input
            placeholder="10..."
            value={exercise.reps}
            keyboardType="number-pad"
            handleChangeText={(e) => setExercise({ ...exercise, reps: e })}
            otherStyles="w-2/3"
          />
        </View>
      </View>
      <View className="flex-row items-center pb-6">
        <Text className="font-bold w-1/3">Duration (min)</Text>
        <Input
          value={exercise.duration}
          handleChangeText={(e) => setExercise({ ...exercise, duration: e })}
          placeholder="Duration..."
          otherStyles="w-2/3"
        />
      </View>
      <View className="flex-row items-center pb-6">
        <Text className="font-bold w-1/3">Rest (secs)</Text>
        <Input
          value={exercise.rest}
          handleChangeText={(e) => setExercise({ ...exercise, rest: e })}
          placeholder="Rest..."
          otherStyles="w-2/3"
        />
      </View>
      {exercise.notes && (
        <>
          <Text className="font-bold text-left pb-2">Notes</Text>
          <Textarea
            value={exercise.notes}
            placeholder="Notes..."
            handleChangeText={(e) => setExercise({ ...exercise, notes: e })}
            otherStyles="pb-6"
          />
        </>
      )}
      <SecondaryButton
        title={isSubmitting ? "Submitting..." : "Submit Change"}
        handlePress={handleExerciseChange}
      />
    </View>
  );
};

export default ExerciseEdit;
