import { configureStore } from "@reduxjs/toolkit";
import GlobalSlices from "../slices/GlobalSlices";
import AuthSlices from "../slices/AuthSlices";

const store = configureStore({
  reducer: {
    global: GlobalSlices,
    auth: AuthSlices,
  },
});

export default store;
