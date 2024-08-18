import { createSlice } from "@reduxjs/toolkit";
import contacts from "data/contacts.json"

const initialState = contacts

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        remove: (state, action) => {
            return state.filter((contact) => contact.id !== action.payload)
        },
        editContact: (state, action) => {
            const { id, updatedContact } = action.payload;
            const index = state.findIndex(contact => contact.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...updatedContact };
            }
        }
    }
})

export const { remove, editContact } = contactsSlice.actions
export default contactsSlice.reducer