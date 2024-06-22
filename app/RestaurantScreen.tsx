import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Restaurant } from "@/components/Features";
import * as Icon from "react-native-feather";
import { ThemeColors } from "@/theme/Theme";
import DishCard from "@/components/DishCard";
import CartBar from "@/components/CartBar";
import { useDispatch } from "react-redux";
import { setRestaurant } from "@/store/restaurantSlice";

// Define the type for your stack navigator
type RootStackParamList = {
  Home: undefined;
  Restaurant: { restaurant: Restaurant };
};

type RestaurantScreenRouteProp = RouteProp<RootStackParamList, "Restaurant">;

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute<RestaurantScreenRouteProp>();
  const dispatch = useDispatch();

  let item = params["restaurant"];

  useEffect(() => {
    dispatch(setRestaurant(item));
  }, []);

  return (
    <View className="relative flex-1">
      {/* cartBar */}
      <CartBar />
      <ScrollView
        className="relative"
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <TouchableOpacity
          className=" absolute w-4 h-4 z-10 p-4 justify-center items-center rounded-full bg-white top-5 left-3"
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft
            stroke={ThemeColors.bgColor(1)}
            width={18}
            height={18}
          />
        </TouchableOpacity>
        <Image source={item.image} className="w-full h-60" />

        {/* Description */}
        <View className="px-4 py-4 -mt-10 bg-white rounded-t-[30px] shadow-lg">
          <Text className="text-xl font-extrabold">{item.name}</Text>
          <View className="flex-row items-center my-1">
            <Icon.Star
              stroke="yellow"
              fill="yellow"
              height={15}
              width={15}
              className="mr-2"
            />
            <Text>
              {item.stars}({item.reviews} review) - {item.category}
            </Text>
          </View>
          <View className="flex-row items-center my-1">
            <Icon.MapPin
              stroke="gray"
              height={20}
              width={20}
              className="mr-2"
            />
            <Text>{item.address}</Text>
          </View>
          <Text className="text-gray-500">{item.description}</Text>

          {/* Menu */}
          <Text className="text-xl font-bold mt-5">Menu</Text>

          {item.dishes.map((e) => (
            <DishCard key={e.id} item={e} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
