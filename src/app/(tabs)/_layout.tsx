import TabBarHeader from "@/src/components/TabBarHeader/TabBarHeader";
import { tabBarLabelStyle } from "@/src/utils/commonHelper";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        header: () => <TabBarHeader />,
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "search",
          tabBarLabelStyle: tabBarLabelStyle,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="search1"
              size={24}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="eventListing"
        options={{
          tabBarLabel: "events",
          tabBarLabelStyle: tabBarLabelStyle,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="calendar-month-outline"
              size={24}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favoriteEvents"
        options={{
          tabBarLabel: "favorites",
          tabBarLabelStyle: tabBarLabelStyle,
          tabBarIcon: ({ focused }) => (
            <SimpleLineIcons
              name="heart"
              size={24}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
