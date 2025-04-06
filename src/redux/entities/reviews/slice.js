import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getReviews } from './get-reviews';

export const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder
            .addCase(
                getReviews.fulfilled,
                (state, { payload }) => {
                    entityAdapter.setAll(state, payload)
                }
            )
});

const selectReviewSlice = (state) => state.reviews;

export const {
    selectById: selectReviewById,
    selectIds: selectReviewsIds,
    selectTotal: selectReviewsTotal
} = entityAdapter.getSelectors(selectReviewSlice);

export const { selectRequestStatus } = reviewsSlice.selectors;