import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { categories } from "@/constants/dummyData";
import { useState } from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <ScrollView
      horizontal
      className="mt-5 px-4 overflow-visible "
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((e) => {
        const activeCate = activeCategory === e.id;
        let bgBtn = activeCate ? " bg-gray-600" : " bg-gray-200";
        let textColor = activeCate ? " text-gray-200" : " text-gray-600";
        return (
          <TouchableOpacity
            key={e.id}
            className="mr-6"
            onPress={() => setActiveCategory(e.id)}
          >
            <View
              className={
                "p-2 flex justify-center items-center rounded-lg shadow-lg" +
                bgBtn
              }
            >
              <Image source={e.image} className="w-9 h-9 rounded" />
              <Text className={"mt-2 font-bold" + textColor}>{e.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Categories;
