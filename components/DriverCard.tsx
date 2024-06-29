import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { ThemeColors } from "@/theme/Theme";

interface DriverCardProps {
  onCancelOrder: () => void;
}

const DriverCard = ({ onCancelOrder }: DriverCardProps) => {
  return (
    <View
      style={{ backgroundColor: ThemeColors.bgColor(1) }}
      className="flex-row items-center justify-between px-2 py-2 rounded-full"
    >
      <Image
        source={require("../assets/images/driver-biker.png")}
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
        onPress={onCancelOrder}
      >
        <Icon.X stroke={"#BE0911"} strokeWidth={5} width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

export default DriverCard;
