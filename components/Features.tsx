import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ThemeColors } from "@/theme/Theme";
import RestaurantCard from "./RestaurantCard";

export interface Restaurant {
  id: number;
  name: string;
  image: any;
  description: string;
  lng: number;
  lat: number;
  address: string;
  stars: number;
  reviews: string;
  category: string;
  dishes: {
    image(image: any): unknown;
    id: number;
    name: string;
    description: string;
    price: number;
  }[];
}

interface FeaturesProps {
  restaurants: Restaurant[];
  title: string;
  description: string;
}

const Features = ({ restaurants, title, description }: FeaturesProps) => {
  return (
    <View className="my-4">
      <View className="flex-row items-center justify-between px-3">
        <View>
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-xs text-gray-500">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: ThemeColors.text }}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible px-5 mt-5"
      >
        {restaurants.map((e) => (
          <RestaurantCard key={e.id} restaurant={e} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Features;
