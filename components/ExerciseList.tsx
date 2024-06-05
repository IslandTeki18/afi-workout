import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";

type Item = {
  key: string;
  name: string;
  sets: string;
};

const initData: Item[] = [
  {
    key: "1",
    name: "Bench Press",
    sets: "6 Sets 10 Reps",
  },
  {
    key: "2",
    name: "Machine Chest Flys",
    sets: "3 Sets 10 Reps",
  },
  { key: "3", name: "DB Pullovers", sets: "3 Sets 10 Reps" },
  { key: "4", name: "Push Ups", sets: "3 Sets 10 Reps" },
  { key: "5", name: "Tricep Dips", sets: "3 Sets 10 Reps" },
  { key: "6", name: "Tricep Extensions", sets: "3 Sets 10 Reps" },
];

export const ExerciseList = () => {
  const [data, setData] = useState<Item[]>(initData);

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          className="bg-secondary w-full p-6 rounded-lg mb-4 flex-row items-center justify-between"
          onPress={() => router.push(`/details/${item.key}`)}
        >
          <Text className="text-mdTitle font-medium" style={{ color: "#fff" }}>
            {item.name}
          </Text>
          <View className="flex-row items-center justify-between gap-4">
            <Text style={{ color: "#fff" }}>{item.sets}</Text>
            <FontAwesome6 name="bars" color="#fff" size={24} />
          </View>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };
  return (
    <DraggableFlatList
      data={data}
      onDragEnd={({ data }) => setData(data)}
      keyExtractor={(item: any) => item.key}
      renderItem={renderItem}
    />
  );
};
