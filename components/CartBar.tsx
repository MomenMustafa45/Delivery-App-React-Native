import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { ThemeColors } from "@/theme/Theme";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/app";
import { useTypedSelector } from "@/app/CartScreen";
import { selectCartTotal } from "@/store/cartSlice";

type CartScreenScreenNavigationProp = ScreenNavigationProp<"Cart">;

const CartBar = () => {
  const navigation = useNavigation<CartScreenScreenNavigationProp>();
  const cartItems = useTypedSelector((state) => state.cart.cart);
  const cartTotal = useTypedSelector((state) => selectCartTotal(state));

  if (!cartItems.length) return;

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
            <Text className=" text-white font-bold text-base">
              {cartItems.length}
            </Text>
          </View>
          <Text className="text-white text-base font-bold">View Cart</Text>
          <Text className="text-white text-base font-bold">${cartTotal}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CartBar;
