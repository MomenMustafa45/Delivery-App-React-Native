import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    restaurant: restaurantSlice,
    cart: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
