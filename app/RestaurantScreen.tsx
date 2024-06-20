import { View, Text } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Restaurant } from "@/components/Features";

// Define the type for your stack navigator
type RootStackParamList = {
  Home: undefined;
  Restaurant: { restaurant: Restaurant };
};

type RestaurantScreenRouteProp = RouteProp<RootStackParamList, "Restaurant">;

const RestaurantScreen = () => {
  const { params } = useRoute<RestaurantScreenRouteProp>();

  let item = params["restaurant"];

  return (
    <View>
      <Text>RestaurantScreen</Text>
    </View>
  );
};

export default RestaurantScreen;
