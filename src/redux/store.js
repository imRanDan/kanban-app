import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";

const store = configureStore({
  reducer: {
    // redux slices slice slice slice
    boards : boardsSlice.reducer,
  }
})

export default store