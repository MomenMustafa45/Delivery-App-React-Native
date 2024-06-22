import { View, Text, Image } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { ThemeColors } from "@/theme/Theme";
import * as Icon from "react-native-feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from ".";

type HomeScreenNavigationProp = ScreenNavigationProp<"Home">;

const DeliveryScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // style={{ height: 200 }}
        className="flex-1"
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Restaurant Name"
          description="Hot and tasty"
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
        <View
          style={{ backgroundColor: ThemeColors.bgColor(1) }}
          className="flex-row items-center justify-between px-2 py-2 rounded-full"
        >
          <Image
            source={require("@/assets/images/deliveryUser.png")}
            style={{ width: 60, height: 60 }}
            className="rounded-full"
          />

          <View className="flex-1 ml-3">
            <Text className="text-white font-bold text-base">Sayed Noman</Text>
            <Text className="text-white font-bold text-sm">Your Rider</Text>
          </View>

          <TouchableOpacity className="bg-white p-3 rounded-full justify-center items-center mr-2">
            <Icon.Phone fill={"#EA8F42"} width={20} height={20} />
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-white p-3 rounded-full justify-center items-center"
            onPress={() => navigation.navigate("Home")}
          >
            <Icon.X stroke={"#BE0911"} strokeWidth={5} width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
