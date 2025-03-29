import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const CustomLoadingComponent = () => {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100/50">
      <ActivityIndicator size={"small"} color={"blue"} />
    </View>
  );
};

export default CustomLoadingComponent;
