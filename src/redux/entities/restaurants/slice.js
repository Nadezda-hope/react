import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurant } from './get-restaurant';
import { getRestaurants } from './get-restaurants';

export const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder
            .addCase(
                getRestaurants.fulfilled,
                (state, { payload }) => {
                    entityAdapter.setAll(state, payload);
                })
            .addCase(
                getRestaurant.fulfilled,
                (state, { payload }) => {
                    entityAdapter.setOne(state, payload);
                })
});

const selectRestaurantsSlice = (state) => state.restaurants;

export const {
    selectById: selectRestaurantById,
    selectIds: selectRestaurantIds,
    selectTotal: selectRestaurantsTotal,
    selectEntities: selectRestaurantsEntities
} = entityAdapter.getSelectors(selectRestaurantsSlice);

export const { selectRequestStatus } = restaurantsSlice.selectors;