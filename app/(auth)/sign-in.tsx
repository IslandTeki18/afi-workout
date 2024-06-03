import { Input, PrimaryButton } from "@/components";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Text, View, ScrollView, Alert, AppState } from "react-native";
import { supabase } from "@/libs/supabase";
import { SafeAreaView } from "react-native-safe-area-context";

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  async function signInWIthEmail() {
    // setIsLoading(true);
    // const { error } = await supabase.auth.signInWithPassword({
    //   email: form.email,
    //   password: form.password,
    // });

    // if (error) {
    //   Alert.alert(error.message);
    //   setIsLoading(false);
    //   return;
    // } else {
    //   setIsLoading(false);
    //   router.push("/home");
    // }
    router.push("/home");
  }

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
            keyboardType="email-address"
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
            title={isLoading ? "Loading..." : "Sign in"}
            size="large"
            handlePress={() => signInWIthEmail()}
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
