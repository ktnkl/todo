import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./reducers/tasks";
import processingSlice from "./reducers/processing";
import modalsSlice from "./reducers/modal"
import pageSlice from "./reducers/page";

export const store = configureStore({
  reducer: {
    taskSlice,
    processingSlice,
    modalsSlice,
    pageSlice
  }
})