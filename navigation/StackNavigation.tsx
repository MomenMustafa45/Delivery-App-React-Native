import CartScreen from "@/app/CartScreen";
import DeliveryScreen from "@/app/DeliveryScreen";
import Home from "@/app/Home";
import LoadingDelivery from "@/app/LoadingDelivery";
import RestaurantScreen from "@/app/RestaurantScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen name="LoadingDelivery" component={LoadingDelivery} />
      <Stack.Screen name="Delivery" component={DeliveryScreen} />
    </Stack.Navigator>
  );
}
