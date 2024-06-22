import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ThemeColors } from "@/theme/Theme";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/app";

type DeliveryScreenNavigationProp = ScreenNavigationProp<"Delivery">;

interface OrderDetailsProps {
  subTotal: number;
  deliveryFee: number;
}

const OrderDetails = ({ subTotal, deliveryFee }: OrderDetailsProps) => {
  const navigation = useNavigation<DeliveryScreenNavigationProp>();

  return (
    <View className="px-7 py-5 bg-[#F9DFCD]">
      <View className="flex-row justify-between items-center my-2">
        <Text>Subtotal</Text>
        <Text>${subTotal}</Text>
      </View>

      <View className="flex-row justify-between items-center my-2">
        <Text>Delivery Fee</Text>
        <Text>${deliveryFee}</Text>
      </View>

      <View className="flex-row justify-between items-center my-2">
        <Text className="font-bold">Order Total</Text>
        <Text className="font-bold">${subTotal + deliveryFee}</Text>
      </View>
      {/* btn place order */}
      <TouchableOpacity
        onPress={() => navigation.navigate("LoadingDelivery")}
        style={{ backgroundColor: ThemeColors.bgColor(1) }}
        className=" items-center justify-center rounded-full py-3 mt-3"
      >
        <Text className="text-white font-bold">Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderDetails;
