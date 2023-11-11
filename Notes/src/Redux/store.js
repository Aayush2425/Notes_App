import { configureStore } from "@reduxjs/toolkit";
import featureReducer from "./Features/FeatureSlice";
export const store = configureStore({
  reducer: {
    feature: featureReducer,
  },
});
