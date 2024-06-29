import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { ThemeColors } from "@/theme/Theme";
import * as Icon from "react-native-feather";
import CartItem from "@/components/CartItem";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from ".";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Restaurant } from "@/components/Features";
import OrderDetails from "@/components/OrderDetails";

type DeliveryScreenNavigationProp = ScreenNavigationProp<"Delivery">;

// Typed version of useSelector hook
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

type CartItemType = {
  id: number; // Adjusted to number since '2' is not a valid type for id
  name: string;
  description: string;
  image: any;
  price: number;
};

interface RepeatedItem {
  item: CartItemType;
  count: number;
}

const CartScreen = () => {
  const [repeatedItems, setRepeatedItems] = useState<RepeatedItem[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const deliveryFee = 2;

  const restaurant: Restaurant | null = useTypedSelector(
    (state) => state.restaurant.restaurant
  );

  const cartItems = useTypedSelector(
    (state) => state.cart.cart
  ) as unknown as CartItemType[];

  const navigation = useNavigation<DeliveryScreenNavigationProp>();

  // calculate total price
  const calculateTotalPrice = () => {
    const subTotalPrice = cartItems.reduce(
      (prev, curr) => prev + curr.price,
      0
    );
    setSubTotal(subTotalPrice);
  };

  // Repeated objects and its count
  const calculateRepeatedItems = (items: CartItemType[]): RepeatedItem[] => {
    const itemCount: { [key: number]: number } = {};

    // Count the occurrences of each item in cartItems
    items.forEach((item) => {
      itemCount[item.id] = (itemCount[item.id] || 0) + 1;
    });

    // Convert the itemCount object into an array of objects
    return Object.entries(itemCount).map(([id, count]) => {
      const cartItem = items.find((item) => item.id === parseInt(id, 10));
      return {
        item: cartItem!,
        count: count as number,
      };
    });
  };

  // Use useMemo to memoize the result of calculateRepeatedItems
  const memoizedRepeatedItems = useMemo(
    () => calculateRepeatedItems(cartItems),
    [cartItems]
  );

  // Update the state with memoizedRepeatedItems
  useEffect(() => {
    setRepeatedItems(memoizedRepeatedItems);
    calculateTotalPrice();
  }, [memoizedRepeatedItems]);

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
        <Text className="text-center text-gray-600">{restaurant?.name}</Text>
        {/*  */}
        <View className="bg-[#708086] px-4 flex-row items-center justify-between py-3 my-3">
          <Image
            source={require("@/assets/images/deliveryImg2.png")}
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
        {repeatedItems.map((e) => (
          <CartItem key={e["item"].id} cartItem={e} />
        ))}
      </ScrollView>
      {/* order details */}
      <OrderDetails subTotal={subTotal} deliveryFee={deliveryFee} />
    </View>
  );
};

export default CartScreen;
