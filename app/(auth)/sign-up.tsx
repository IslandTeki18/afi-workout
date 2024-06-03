import { Text, View, ScrollView, Alert, AppState } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, PrimaryButton } from "@/components";
import { Link, router } from "expo-router";
import { supabase } from "@/libs/supabase";

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  async function signUpWithEmail() {
    setIsLoading(true);
    const { data: session, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          first_name: form.firstName,
          last_name: form.lastName,
        }
      },
    });

    if (error) {
      Alert.alert(error.message);
      setIsLoading(false);
      return;
    } else if (!session) {
      Alert.alert("Please check your inbox for email verification!");
    } else {
      setIsLoading(false);
      router.push("/home");
    }
  }
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
            placeholder="Last name..."
            handleChangeText={(e) => setForm({ ...form, lastName: e })}
            value={form.lastName}
            otherStyles="mb-8"
          />
          <Input
            placeholder="Email..."
            handleChangeText={(e) => setForm({ ...form, email: e })}
            value={form.email}
            otherStyles="mb-8"
            keyboardType="email-address"
          />
          <Input
            placeholder="Password..."
            handleChangeText={(e) => setForm({ ...form, password: e })}
            value={form.password}
          />
        </View>
        <View className="justify-end min-h-[20vh] w-full px-6">
          <PrimaryButton
            title={isLoading ? "Loading..." : "Sign up"}
            size="large"
            handlePress={() => signUpWithEmail()}
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
