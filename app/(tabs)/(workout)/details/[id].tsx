import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";

const ExerciseDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Exercise Details {id}</Text>
      <Link
        href={{
          pathname: "/edit/exercise-edit",
          params: { id },
        }}
      >
        Edit Exercise
      </Link>
    </View>
  );
};

export default ExerciseDetails;
