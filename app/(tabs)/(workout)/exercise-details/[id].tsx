import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Exercise } from "@/types/Exercise";

const mockExercise = {
  id: 1,
  name: "Bench Press",
  sets: 3,
  reps: 10,
  duration: "60 min",
  rest: "60 min",
  notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget. ",
};



const ExerciseDetails = () => {
  const { id } = useLocalSearchParams();
  const [exercise, setExercise] = useState<Exercise>(mockExercise);

  return (
    <View className="h-full px-6 bg-white">
      <Text className="text-xlTitle font-semibold py-4">{exercise.name}</Text>
      <View className="flex-row items-center gap-4 mb-4">
        <View className="flex flex-col gap-2">
          <Text className="text-smTitle">Sets</Text>
          <View className="flex justify-center items-center h-[80px] min-w-[104px] bg-secondary rounded-lg">
            <Text className="text-xxlTitle font-bold text-[#ffffff]">
              {exercise.sets}
            </Text>
          </View>
        </View>
        <View className="flex flex-col gap-2">
          <Text className="text-smTitle">Reps</Text>
          <View className="flex justify-center items-center h-[80px] min-w-[104px] bg-secondary rounded-lg">
            <Text className="text-xxlTitle font-bold text-[#ffffff]">
              {exercise.reps}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center mb-4">
        <Text className="text-mdTitle font-semibold pr-2">Duration:</Text>
        <Text>{exercise.duration}</Text>
      </View>
      <View className="flex-row items-center mb-4">
        <Text className="text-mdTitle font-semibold pr-2">Rest:</Text>
        <Text>{exercise.rest}</Text>
      </View>
      <View className="flex-row items-start mb-4">
        <Text className="text-mdTitle font-semibold pr-2">Notes:</Text>
        <Text className="max-w-[300px]">{exercise.notes}</Text>
      </View>
      <Link
        href={{
          pathname: "edit-exercise/exercise-edit",
          params: exercise,
        }}
        className="w-full p-2 text-center bg-secondary text-[#ffffff]"
      >
        Edit Exercise
      </Link>
    </View>
  );
};

export default ExerciseDetails;
