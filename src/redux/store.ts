import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import subscriptionReducer from "./redux-slices/SubscriptionSlice";
// import cartReducer from "./redux-slices/cartSlice";
import userReducer from "./redux-slices/UserSlice";
// import messageReducer from "./redux-slices/messageSlice"
// import ticketReducer from "./redux-slices/ticketSlice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ 
  user: userReducer, 
//   subscription: subscriptionReducer, 
//   cart: cartReducer,
//   message: messageReducer,
//   ticket: ticketReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: false
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
