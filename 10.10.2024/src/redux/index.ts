import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./xbet";

export default configureStore({
    reducer: {
        "xbet": reducer
    }
})