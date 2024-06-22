import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { Restaurant } from "./Features";
import { ScreenNavigationProp } from "@/app";

type RestaurantScreenScreenNavigationProp = ScreenNavigationProp<"Restaurant">;

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const widthOfScreen = Dimensions.get("window").width;

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const navigation = useNavigation<RestaurantScreenScreenNavigationProp>();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { restaurant })}
    >
      <View
        className=" border-[1px] pb-2 mr-10 rounded-2xl overflow-hidden"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 3.84,
          elevation: 5,
          backgroundColor: "#fff", // Ensure the background color is set for the shadow to appear correctly
          marginBottom: 5, // Add margin if this card is inside a scroll view and you want space between cards
        }}
      >
        <Image
          source={restaurant.image}
          style={{
            width: widthOfScreen * 0.7,
            height: 150,
          }}
        />
        <Text className="text-lg font-bold ml-2 my-2">{restaurant.name}</Text>
        <View className="flex-row ml-2 my-1">
          <Icon.Star
            stroke="yellow"
            fill="yellow"
            height={20}
            width={20}
            className="mr-2"
          />
          <Text>
            {restaurant.stars}({restaurant.reviews}) - {restaurant.category}
          </Text>
        </View>
        <View className="flex-row ml-2 my-1">
          <Icon.MapPin stroke="gray" height={20} width={20} className="mr-2" />
          <Text>{restaurant.address}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
