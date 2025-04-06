import { createSlice } from '@reduxjs/toolkit';

export const requestSlice = createSlice({
    name: 'request',
    initialState: {},
    selectors: {
        selectIsLodaing: (state, id) => state[id] === 'pending',
        selectRequestStatus: (state, id) => state[id] || 'idle',
    },
    extraReducers: (builder) =>
        builder
            .addMatcher(
                ({ type }) => type.endsWith('pending'),
                (state, { meta }) => {
                    state[meta.requestId] = 'pending';
                }
            )
            .addMatcher(
                ({ type }) => type.endsWith('rejected'),
                (state, { meta }) => {
                    state[meta.requestId] = 'rejected';
                }
            )
            .addMatcher(
                ({ type }) => type.endsWith('fulfilled'),
                (state, { meta }) => {
                    state[meta.requestId] = 'fulfilled';
                }
            )
})

export const { selectIsLodaing, selectRequestStatus } = requestSlice.selectors;