import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { ThemeColors } from "@/theme/Theme";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/store/cartSlice";

interface CartItemProps {
  cartItem: {
    count: number;
    item: {
      id: number; // Adjusted to number since '2' is not a valid type for id
      name: string;
      description: string;
      image: any;
      price: number;
    };
  };
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const dispatch = useDispatch();

  return (
    <View
      className="flex-row justify-between items-center my-2 px-2 py-2 rounded-2xl"
      style={{
        elevation: 5,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3.84,
      }}
    >
      <Text className="mr-2">{cartItem.count} x</Text>
      <Image
        source={require("@/assets/images/pizzaItem.jpg")}
        style={{ width: 50, height: 50 }}
        className="rounded-full mr-3"
      />
      <Text className="flex-1 font-bold">{cartItem.item.name}</Text>
      <Text className="mr-3 font-bold">${cartItem.item.price}</Text>
      <TouchableOpacity
        onPress={() => dispatch(removeFromCart(cartItem.item.id))}
        style={{ backgroundColor: ThemeColors.bgColor(1) }}
        className="rounded-full p-1"
      >
        <Icon.Minus stroke={"white"} width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
