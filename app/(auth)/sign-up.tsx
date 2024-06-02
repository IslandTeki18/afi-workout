import { Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, PrimaryButton } from "@/components";
import { Link, router } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[65vh] px-6">
          <Text className="text-lgTitle font-normal text-center">
            Hey there,
          </Text>
          <Text className="text-xlTitle font-bold text-center">
            Create an Account
          </Text>
          <Input
            placeholder="First name..."
            handleChangeText={(e) => setForm({ ...form, firstName: e })}
            value={form.firstName}
            otherStyles="mb-8 mt-10"
          />
          <Input
            placeholder="First name..."
            handleChangeText={(e) => setForm({ ...form, lastName: e })}
            value={form.lastName}
            otherStyles="mb-8"
          />
          <Input
            placeholder="Email..."
            handleChangeText={(e) => setForm({ ...form, lastName: e })}
            value={form.email}
            otherStyles="mb-8"
          />
          <Input
            placeholder="Password..."
            handleChangeText={(e) => setForm({ ...form, password: e })}
            value={form.password}
            otherStyles="mb-8"
          />
        </View>
        <View className="justify-endvh] w-full px-6">
          <PrimaryButton
            title="Create Account"
            size="large"
            handlePress={() => router.push("/home")}
          />
          <View className="pt-6 flex-row gap-2 justify-center">
            <Text className="text-secondary text-center text-mdTitle">
              Already have an account?
            </Text>
            <Link className="text-primary" href="/sign-in">
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
