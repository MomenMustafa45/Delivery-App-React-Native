import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { ThemeColors } from "@/theme/Theme";
import * as Icon from "react-native-feather";
import CartItem from "@/components/CartItem";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from ".";

type DeliveryScreenNavigationProp = ScreenNavigationProp<"Delivery">;

const CartScreen = () => {
  const navigation = useNavigation<DeliveryScreenNavigationProp>();
  return (
    <View className=" relative pt-3 flex-1">
      <TouchableOpacity
        style={{ backgroundColor: ThemeColors.bgColor(1) }}
        className=" absolute w-5 h-5 p-4 items-center justify-center rounded-full top-5 left-4 z-10"
        onPress={() => navigation.goBack()}
      >
        <Icon.ArrowLeft stroke={"white"} />
      </TouchableOpacity>
      <View>
        <Text className="text-center text-lg font-bold">Your Cart</Text>
        <Text className="text-center text-gray-600">Papa Johns</Text>
        {/*  */}
        <View className="bg-[#708086] px-4 flex-row items-center justify-between py-3 my-3">
          <Image
            source={require("@/assets/images/delivery2.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text>Deliver in 20-30 minutes</Text>
          <TouchableOpacity
            className="px-2 py-1 rounded-full items-center justify-center"
            style={{ backgroundColor: ThemeColors.bgColor(1) }}
          >
            <Text className="text-white text-xs">Change</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* order items */}
      <ScrollView className="px-3 flex-1" showsVerticalScrollIndicator={false}>
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>
      {/* order details */}
      <View className="px-7 py-5 bg-[#F9DFCD]">
        <View className="flex-row justify-between items-center my-2">
          <Text>Subtotal</Text>
          <Text>$20</Text>
        </View>
        <View className="flex-row justify-between items-center my-2">
          <Text>Delivery Fee</Text>
          <Text>$2</Text>
        </View>
        <View className="flex-row justify-between items-center my-2">
          <Text className="font-bold">Order Total</Text>
          <Text className="font-bold">$30</Text>
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
    </View>
  );
};

export default CartScreen;
