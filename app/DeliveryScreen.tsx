import { View, Text, Image } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { ThemeColors } from "@/theme/Theme";
import * as Icon from "react-native-feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from ".";
import { useTypedSelector } from "./CartScreen";
import { useDispatch } from "react-redux";
import { emptyCart } from "@/store/cartSlice";
import DriverCard from "@/components/DriverCard";

type HomeScreenNavigationProp = ScreenNavigationProp<"Home">;

const DeliveryScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const restaurant = useTypedSelector((state) => state.restaurant.restaurant);
  const dispatch = useDispatch();

  const cancelOrderHandler = () => {
    navigation.navigate("Home");
    dispatch(emptyCart());
  };

  const latitude = restaurant?.lat ?? 0; // Provide a default value
  const longitude = restaurant?.lng ?? 0; // Provide a default value

  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
      >
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          title={restaurant?.name}
          description={restaurant?.description}
        />
      </MapView>
      {/* Delivery Details */}
      <View
        className="bg-white pt-10 pb-2 px-4 -mt-12 rounded-t-[50px]"
        style={{
          elevation: 5,
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 3.84,
        }}
      >
        {/*  */}
        <View className="flex-row justify-between items-center my-4">
          <View>
            <Text className="font-bold text-base text-gray-700">
              Estimated Arrival
            </Text>
            <Text className="font-bold text-3xl my-1 text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="text-gray-700">Your order is own its way</Text>
          </View>
          <View>
            <Image
              source={require("@/assets/images/delivery.png")}
              style={{ width: 70, height: 70 }}
            />
          </View>
        </View>
        {/* driver details */}
        <DriverCard onCancelOrder={cancelOrderHandler} />
      </View>
    </View>
  );
};

export default DeliveryScreen;
