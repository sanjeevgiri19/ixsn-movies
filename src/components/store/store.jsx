import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/MovieSlice";
import tvReducer from "./reducers/TvSlice";
import personReducer from "./reducers/PersonSlice";
// import authReducer from "./reducers/AuthSlice"

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    person: personReducer,
    // auth: authReducer
  },
});
