import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
export default function WelcomeScreen() {
  // const [buttonStyles, setButtonStyles] = useState({});
  const { navigate } = useNavigation();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-neutral-950 px-2">
      <Text className="text-[#b9b7dc] font-bold text-4xl mb-12">
        Welcome{" "}
        <Text className="text-white font-bold text-4xl mb-12">
          to{" "}
          <Text className="text-[#b9b7dc] font-bold text-4xl mb-12">Echo</Text>
          Wiz
        </Text>
      </Text>

      <View className="overflow-hidden rounded-full h-72 w-72">
        <Image
          // style={imageWrapper}
          className="h-72 w-72"
          source={require("../assets/images/ChatBot.png")}
        />
      </View>

      <Text className="text-white font-light text-3xl my-6">
        The{" "}
        <Text className="text-[#b9b7dc] font-bold text-3xl mb-12">Future</Text>{" "}
        is here.
      </Text>

      <Pressable
        className="rounded-xl bg-[#514d7e] p-4 w-3/4 my-8"
        onPress={() => navigate("Home")}
      >
        <Text className="text-white text-3xl text-center">Get Started</Text>
      </Pressable>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
