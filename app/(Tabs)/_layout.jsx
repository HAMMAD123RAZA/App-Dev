import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs >
      <Tabs.Screen
      
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
        }}
      />
        <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="BookMark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="bookmark" size={24} color={color} />
        }}
      />

    </Tabs>
  );
}

export default TabsLayout;
