import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { ThemeColors } from "@/theme/Theme";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/app";

type CartScreenScreenNavigationProp = ScreenNavigationProp<"Cart">;

const CartBar = () => {
  const navigation = useNavigation<CartScreenScreenNavigationProp>();

  return (
    <View className="absolute bottom-5 w-full z-10">
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Cart")}>
        <View
          style={{
            backgroundColor: ThemeColors.bgColor(1),
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 3.84,
          }}
          className="mx-5 rounded-full p-4 py-3 flex-row items-center justify-between"
        >
          <View className=" bg-slate-400 w-8 h-8 items-center justify-center flex rounded-full">
            <Text className=" text-white font-bold text-base">3</Text>
          </View>
          <Text className="text-white text-base font-bold">View Cart</Text>
          <Text className="text-white text-base font-bold">$23</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CartBar;
