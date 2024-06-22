import { View, Text, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { ThemeColors } from "@/theme/Theme";

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
            <View
              className=" items-center justify-center p-1 rounded-full mr-3"
              style={{ backgroundColor: ThemeColors.bgColor(1) }}
            >
              <Icon.Minus width={18} height={18} stroke={"white"} />
            </View>
            <Text className="text-base">2</Text>
            <View
              className=" items-center justify-center p-1 rounded-full ml-3"
              style={{ backgroundColor: ThemeColors.bgColor(1) }}
            >
              <Icon.Plus width={15} height={15} stroke={"white"} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishCard;
