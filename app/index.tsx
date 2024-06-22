import MyStack from "@/navigation/StackNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Restaurant } from "@/components/Features";
import { Provider } from "react-redux";
import { store } from "@/store/store";

type RootStackParamList = {
  LoadingDelivery: undefined;
  Delivery: undefined;
  Home: undefined;
  Restaurant: { restaurant: Restaurant };
  Cart: undefined;
};

export type ScreenNavigationProp<Screen extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, Screen>;

export default function Index() {
  return (
    <>
      <Provider store={store}>
        <MyStack />
      </Provider>
    </>
  );
}
