import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const ReviewWorkout = () => {
  return (
    <ScrollView className="bg-white h-full">
      <View className="flex-row py-6">
        <Text className="text-lgTitle font-normal pr-4">
          Review:
        </Text>
        <Text className="text-lgTitle font-bold"></Text>
      </View>
    </ScrollView>
  )
}

export default ReviewWorkout