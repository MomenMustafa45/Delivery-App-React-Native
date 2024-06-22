import { Restaurant } from "@/components/Features";
import { createSlice } from "@reduxjs/toolkit";

interface RestaurantState {
  restaurant: Restaurant | null;
}

const initialState: RestaurantState = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
