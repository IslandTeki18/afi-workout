import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";

type InputProps = {
  placeholder: string;
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
  label?: string;
};

export const Input = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${props.otherStyles}`}>
      {props.label && <Text className="text-mdTitle">{props.label}</Text>}
      <View className="w-full h-16 px-6 border border-secondary rounded-lg focus:border-primary items-center flex-row">
        <TextInput
          className="flex-1 text-black font-normal text-mdTitle"
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.handleChangeText}
          keyboardType={props.keyboardType || "default"}
          secureTextEntry={props.placeholder === "Password..." && !showPassword}
          placeholderTextColor={"#5F5F5F"}
        />
        {props.placeholder === "Password..." && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome6
              name={showPassword ? "eye-slash" : "eye"}
              color="#5F5F5F"
              size={24}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
