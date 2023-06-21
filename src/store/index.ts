import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
reducer:{}
})

export type TRooState = ReturnType<typeof store.getState>