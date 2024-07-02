import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from ".";

type LoadingDeliveryScreenNavigationProp =
  ScreenNavigationProp<"LoadingDelivery">;

const LoadingDelivery = () => {
  const navigation = useNavigation<LoadingDeliveryScreenNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Delivery");
    }, 3000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      {/* <Image
        source={require("../assets/images/deliveryGuy2.png")}
        style={{ width: "35%", height: "35%" }}
      /> */}
      <View className="w-1/3 h-1/3 rounded-full bg-orange-800"></View>
    </View>
  );
};

export default LoadingDelivery;
