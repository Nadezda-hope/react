import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../../material/normalized-mock';

const initialState = {
    entities: normalizedRestaurants.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}),
    ids: normalizedRestaurants.map((item) => item.id),
}

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantIds: (state) => state.ids
    }
});

export const { selectRestaurantById, selectRestaurantIds } = restaurantsSlice.selectors;