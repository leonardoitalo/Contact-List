import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "store/reducers/contacts-reducer"

export const store = configureStore({
    reducer: {
        contact: contactReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>