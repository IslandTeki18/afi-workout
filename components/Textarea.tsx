import { View, Text, TextInput } from "react-native";
import React from "react";

type TextareaProps = {
  placeholder: string;
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
};

const Textarea = (props: TextareaProps) => {
  return (
    <View className={`${props.otherStyles}`}>
      <View className="h-40 px-6 border border-secondary rounded-lg focus:border-primary">
        <TextInput
          className="flex-1 text-black font-normal text-mdTitle"
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.handleChangeText}
          placeholderTextColor={"#5F5F5F"}
          multiline
        />
      </View>
    </View>
  );
};

export default Textarea;
