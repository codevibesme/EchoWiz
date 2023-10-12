import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import Feature from "../componets/Feature";
import { dummyMessage } from "../constants";
export default function HomeScreen() {
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);
  useEffect(() => {
    setMessages(dummyMessage);
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-neutral-950 px-4 py-8 justify-between">
      <View className=" flex-col mx-auto h-28 w-28 rounded-full overflow-hidden mb-4 items-cente">
        <Image
          source={require("../assets/images/ChatBot.png")}
          className="h-28 w-28"
        />
      </View>
      <Text className="text-2xl text-white text-left font-medium mb-4">
        {messages.length > 0 ? "Assistant" : "Features"}
      </Text>
      {messages.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="rounded-xl p-2 border border-gray-600"
        >
          {/*Displaying messages*/}
          {messages.map((msg, index) => {
            if (msg.role === "assistant") {
              if (msg.content.includes("https")) {
                return (
                  <View className="flex-row mb-3" key={index}>
                    <View className="bg-slate-700 rounded-2xl  overflow-hidden rounded-tl-none p-1">
                      <Image
                        source={{ uri: msg.content }}
                        className="h-56 w-56 rounded-2xl"
                      />
                      {/* <Text>{msg.content}</Text> */}
                    </View>
                  </View>
                );
              } else {
                return (
                  <View className="flex-row mb-3" key={index}>
                    <View className="bg-slate-700 rounded-2xl rounded-tl-none p-2">
                      <Text className="text-white text-lg font-medium">
                        {msg.content}
                      </Text>
                    </View>
                  </View>
                );
              }
            } else {
              return (
                <View className="flex-row justify-end mb-3" key={index}>
                  <View className="bg-emerald-800 rounded-2xl rounded-tr-none p-2">
                    <Text className="text-white text-lg font-medium">
                      {msg.content}
                    </Text>
                  </View>
                </View>
              );
            }
          })}
        </ScrollView>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Features */}
          <Feature
            title="ChatGPT"
            desc="ChatGPT can provide you with instant and knowledgeable responses, assist
          you with creative ideas on a wide range of topics."
            logo={require("../assets/images/chatgpt-icon.png")}
            bgCol="bg-[#14a47c]"
          />
          <Feature
            title="DALL-E"
            desc="DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity."
            logo={require("../assets/images/dalle-icon.png")}
            bgCol="bg-[#b9b7dc]"
          />
          <Feature
            title="Smart-AI"
            desc="A smart voice assistant with the abilities of ChatGPT and DALL-E, providing you the best of both worlds."
            logo={require("../assets/images/smart-icon.png")}
            bgCol="bg-[#008080]"
          />
        </ScrollView>
      )}

      {/*STOP PLAYING*/}
      <View className="flex-row justify-center items-center w-full">
        {messages.length > 0 && speaking && (
          <View className="w-1/3">
            <Pressable
              className="mt-8 flex-row justify-start"
              onPress={() => setSpeaking(!speaking)}
            >
              <View className="rounded-lg bg-red-400 p-1 px-4">
                <Text
                  source={require("../assets/images/recording.gif")}
                  className="text-white text-xl"
                >
                  Stop
                </Text>
              </View>
            </Pressable>
          </View>
        )}
        {/*START RECORDING*/}
        <Pressable
          className="flex-row mt-8 w-1/3 justify-center"
          onPress={() => setIsRecording(!isRecording)}
        >
          {isRecording ? (
            <View className="rounded-full overflow-hidden border-4 border-[#b9b7dc]">
              <Image
                source={require("../assets/images/recording.gif")}
                className="h-12 w-12"
              />
            </View>
          ) : (
            <View className="rounded-full overflow-hidden border-2 bg-[#b9b7dc]">
              <Image
                source={require("../assets/images/mic.gif")}
                className="h-12 w-12"
              />
            </View>
          )}
        </Pressable>
        {/*CLEAR CONVERSATION*/}
        {messages.length > 0 && (
          <View className="w-1/3">
            <Pressable
              className="flex-row mt-8 justify-end"
              onPress={() => setMessages([])}
            >
              <View className="rounded-lg bg-[#b9b7dc] p-1 px-4">
                <Text
                  source={require("../assets/images/recording.gif")}
                  className="text-white text-xl"
                >
                  Clear
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
