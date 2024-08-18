import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import contacts from "data/contacts.json"
import { IContact } from "interfaces/IContact";

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
        },
        addContact: (state, action: PayloadAction<IContact>) => {
            state.push(action.payload);
        }
    }
})

export const { remove, editContact, addContact } = contactsSlice.actions
export default contactsSlice.reducer