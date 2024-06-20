import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { ThemeColors } from "@/theme/Theme";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import { features } from "@/constants/dummyData";

const Home = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* Search Bar */}
      <View className="flex-row justify-between pb-2 px-3 pt-2 shadow-lg bg-white">
        <View className="flex-row items-center border-[1px] border-gray-300 rounded-full px-4 py-2 flex-1 justify-between">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="flex-1 px-1" />
          <View className="flex-row border-l-[1px] pl-1 border-gray-300">
            <Icon.MapPin
              height="20"
              width="20"
              stroke="gray"
              className="mr-1"
            />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: `${ThemeColors.bgColor(1)}` }}
          className="ml-3 justify-center items-center rounded-full p-3"
        >
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.4}
            stroke="white"
          />
        </View>
      </View>

      {/* Main Content */}
      <ScrollView showsVerticalScrollIndicator={false} className=" mb-16">
        <Categories />

        {/* Features */}
        {[features, features, features].map((f, i) => {
          return (
            <Features
              key={i}
              restaurants={f.restaurants}
              title={f.title}
              description={f.description}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
