import { View, Text, Image } from "react-native";
import React from "react";
export default function Feature({ title, desc, logo, bgCol }) {
  return (
    <View
      className={
        bgCol + " rounded-xl flex-col justify-center items-center mb-4"
      }
    >
      <View className="flex-row w-full">
        <Image source={logo} className="h-8 w-8 mr-2" />
        <View className="h-8 flex justify-center">
          <Text className="text-white text-lg">{title}</Text>
        </View>
      </View>
      <View className="p-2">
        <Text className="text-white text-lg">{desc}</Text>
      </View>
    </View>
  );
}
