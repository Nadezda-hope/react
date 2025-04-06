import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getDishes } from './get-dishes';
import { getDish } from './get-dish';

export const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder
            .addCase(
                getDishes.fulfilled,
                (state, { payload }) => {
                    entityAdapter.setAll(state, payload)
                }
            )
            .addCase(
                getDish.fulfilled,
                (state, { payload }) => {
                    entityAdapter.setOne(state, payload)
                }
            )
});

const selectDishesSlice = (state) => state.dishes;

export const {
    selectById: selectDishById,
    selectIds: selectDishesIds,
    selectTotal: selectDishesTotal
} = entityAdapter.getSelectors(selectDishesSlice);

export const { selectRequestStatus } = dishesSlice.selectors;