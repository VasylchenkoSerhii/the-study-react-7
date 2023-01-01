import { createSlice } from "@reduxjs/toolkit";
import {
    fetchContacts,
    addContact,
    removeContact
} from "./operations";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null,
        }
    },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
         },
        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        },
        [fetchContacts.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        [addContact.pending](state) {
            state.isLoading = true;
         },
        [addContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
        },
        [addContact.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        [removeContact.pending](state) {
            state.isLoading = true;
        },
        [removeContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(item => item.id === payload.id);
            state.items.splice(index, 1);
        },
        [removeContact.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        }
    },
});

export const contactsReducer = contactsSlice.reducer;