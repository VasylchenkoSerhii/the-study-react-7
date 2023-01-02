import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
    fetchContacts,
    addContact,
    removeContact
} from "./operations";

const extraActions = [fetchContacts, addContact, removeContact];

const getActions = type => extraActions.map(action => action[type])

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null,
        }
    },
    extraReducers: builder => builder
        .addCase(fetchContacts.fulfilled, (state, { payload }) => { state.items = payload; })
        .addCase(addContact.fulfilled, (state, { payload }) => { state.items.push(payload); })
        .addCase(removeContact.fulfilled, (state, { payload }) => {
            const index = state.items.findIndex(item => item.id === payload.id);
            state.items.splice(index, 1);
        })
        .addMatcher(
            isAnyOf(...getActions("pending")),
            state => {
                state.isLoading = true;
            })
        .addMatcher(
            isAnyOf(...getActions("rejected")),
            (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
        .addMatcher(
            isAnyOf(...getActions("fulfilled")),
            state => {
                state.isLoading = false;
                state.error = null;
            })
});

export const contactsReducer = contactsSlice.reducer;
