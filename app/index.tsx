import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { PrimaryButton } from '@/components'
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';

const App = () => {
    return (
        <SafeAreaView className="bg-accent h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="items-center justify-center gap-2 min-h-[80vh] px-6">
                    <Text className=" text-xxlTitle font-semibold">AFI WORKOUT</Text>
                    <FontAwesome6 name="dumbbell" size={48} color="#000" />
                </View>
                <View className="items-center justify-center gap-2 min-h-[5vh] px-6">
                    <PrimaryButton title="Get Started" size='large' handlePress={() => router.push("/sign-in")} />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#ffffff' style="dark" />
        </SafeAreaView>
    )
}



export default App