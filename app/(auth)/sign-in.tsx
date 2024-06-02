import { Input, PrimaryButton } from "@/components";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[45vh] px-6">
          <Text className="text-lgTitle font-normal text-center">
            Hey there,
          </Text>
          <Text className="text-xlTitle font-bold text-center">
            Welcome back!
          </Text>
          <Input
            placeholder="Email..."
            handleChangeText={(e) => setForm({ ...form, email: e })}
            value={form.email}
            otherStyles="mb-8 mt-10"
          />
          <Input
            placeholder="Password..."
            handleChangeText={(e) => setForm({ ...form, password: e })}
            value={form.password}
            otherStyles="mb-8"
          />
          <Text className="text-secondary text-center underline text-sm">
            Forgot your password?
          </Text>
        </View>
        <View className="justify-end min-h-[40vh] w-full px-6">
          <PrimaryButton
            title="Login"
            size="large"
            handlePress={() => router.push("/home")}
          />
          <View className="pt-6 flex-row gap-2 justify-center">
            <Text className="text-secondary text-center text-mdTitle">
              Don't have an account?
            </Text>
            <Link className="text-primary" href="/sign-up">
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
