import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";

type SelectProps = {
  list: any[];
  placeholder: string;
  handleSelection: (value: string) => void;
  otherStyles?: string;
};

export const Select = (props: SelectProps) => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleItemPressed = (item: any) => {
    setSelectedItem(item);
    setShowDropdown(false);
    props.handleSelection(item.title);
  };
  return (
    <View className={`relative w-full ${props.otherStyles}`}>
      <View className="h-16 px-6 border border-secondary rounded-lg focus:border-primary items-center flex-row">
        <TouchableOpacity
          onPress={() => setShowDropdown((prev) => !prev)}
          className="w-full py-2"
        >
          <Text
            className={`${
              selectedItem ? "text-black" : "text-secondary"
            } font-normal text-mdTitle`}
          >
            {selectedItem ? selectedItem.title : props.placeholder}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowDropdown((prev) => !prev)}>
          <FontAwesome6 name="chevron-down" size={18} color="#000" />
        </TouchableOpacity>
      </View>
      {showDropdown && (
        <View className="absolute w-full bg-white border border-primary rounded-lg top-16">
          <FlatList
            data={props.list}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="p-4 w-full"
                onPress={() => handleItemPressed(item)}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
};
