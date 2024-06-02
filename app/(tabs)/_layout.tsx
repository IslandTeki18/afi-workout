import { Image, Text, View, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


const TabIcon = ({ name, focused }: { name: string, focused: boolean }) => {
  return (
    <View>
      <FontAwesome6 name={name} color={focused ? '#E43E3E' : '#ffffff'} size={24} solid />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#5F5F5F',
          borderTopColor: '#fff',
        }
      }}>
        <Tabs.Screen name="home" options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color = '', focused = false }) => (
            <TabIcon name="house" focused={focused} />
          )
        }} />
        <Tabs.Screen name="workout" options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color = '', focused = false }) => (
            <TabIcon name="dumbbell" focused={focused} />
          )
        }} />
        <Tabs.Screen name="profile" options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color = '', focused = false }) => (
            <TabIcon name="user" focused={focused} />
          )
        }} />
      </Tabs>
    </>
  )
}

export default TabsLayout
