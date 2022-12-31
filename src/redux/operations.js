import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://637c0d2472f3ce38ea9a1445.mockapi.io';

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async () => {
        try {
            const { data } = await axios.get(`/contacts`);
            return data;
        } catch (error) {
            console.log(error);
        };
    });

export const addContact = createAsyncThunk("contacts/addContact",
    async (contact) => {
        try {
            const { data } = await axios.post(`/contacts`, {contact});
            return data;
        } catch (error) {
            console.log(error);
        };
    });