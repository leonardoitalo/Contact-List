import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "Redux/store/reducers/contacts-reducer"

export const store = configureStore({
    reducer: {
        contact: contactReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>