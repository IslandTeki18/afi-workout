import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

const ExerciseEdit = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Exercise Edit</Text>
      <Text>{id}</Text>
    </View>
  );
};

export default ExerciseEdit;
