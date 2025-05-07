import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

interface ToastMessage {
  message: string;
  id: string;
  type?: "info" | "success" | "warning" | "error" | "loading";
  isOneTime?: boolean;
}

interface ToastState {
  messages: ToastMessage[];
}

const initialState: ToastState = {
  messages: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<string>) => {
      state.messages.push({ id: uuid(), message: action.payload, isOneTime: true });
    },
    addCustom: (state, action: PayloadAction<ToastMessage>) => {
      state.messages.push(action.payload);
    },
    removeMessage: (state, action: PayloadAction<string>) => {
      state.messages = state.messages.filter((message) => message.id !== action.payload);
    },
    updateMessage: (state, action: PayloadAction<ToastMessage>) => {
      const toast = state.messages.find((message) => message.id === action.payload.id);
      if (toast) {
        toast.message = action.payload.message;
        toast.type = action.payload.type;
      }
    },
  },
});

export const { addMessage, addCustom, removeMessage, updateMessage } = toastSlice.actions;

export default toastSlice.reducer;
