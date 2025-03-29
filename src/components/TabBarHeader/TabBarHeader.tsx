import { View, Text } from "react-native";
import React from "react";
import { height } from "@/src/utils/commonHelper";

const TabBarHeader = () => {
  return (
    <View className="bg-white p-5 pt-10 gap-y-1">
      <Text className="capitalize font-bold text-2xl">hello renzo!</Text>
      <Text className="capitalize text-gray-500">are you ready to dance?</Text>
    </View>
  );
};

export default TabBarHeader;
