import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { ThemeColors } from "@/theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "@/store/cartSlice";
import { useTypedSelector } from "@/app/CartScreen";
import { createSelector } from "reselect";
import { RootState } from "@/store/store";

const selectCartItems = (state: RootState) => state.cart.cart;

export const selectCartItemById = (id: number) =>
  createSelector([selectCartItems], (cartItems) =>
    cartItems.filter((item) => item.id == id.toString())
  );

interface DishProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: any;
  };
}

const DishCard = ({ item }: DishProps) => {
  // Create a memoized selector for the current item's ID
  const selectCartItem = React.useMemo(
    () => selectCartItemById(item.id),
    [item.id]
  );

  // Use the memoized selector
  const cartItemById = useSelector((state: RootState) => selectCartItem(state));

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <View
      className="flex-row rounded-xl items-center py-2 mt-5"
      style={{
        elevation: 5,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3.84,
      }}
    >
      <View>
        <Image
          source={item.image}
          style={{ width: 100, height: 100 }}
          className="mr-3 rounded-2xl"
        />
      </View>
      {/*  */}
      <View className="flex-1 pr-5">
        <Text className=" text-base">{item.name}</Text>
        <Text className=" text-xs text-gray-600">{item.description}</Text>
        {/*  */}
        <View className="flex-row mt-5 justify-between">
          <Text className=" text-gray-700 font-bold text-base">
            ${item.price}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!cartItemById.length}
              className=" items-center justify-center p-2 rounded-full mr-3"
              style={{ backgroundColor: ThemeColors.bgColor(1) }}
            >
              <Icon.Minus width={18} height={18} stroke={"white"} />
            </TouchableOpacity>
            <Text className="text-base">{cartItemById.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              className=" items-center justify-center p-2 rounded-full ml-3"
              style={{ backgroundColor: ThemeColors.bgColor(1) }}
            >
              <Icon.Plus width={15} height={15} stroke={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishCard;
