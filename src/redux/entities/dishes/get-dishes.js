import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDishById, selectDishesIds, selectDishesTotal } from './slice';

export const getDishes = createAsyncThunk(
    'dishes/getDishes',
    async (restaurantId, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`)
        const result = await response.json();
        if (!result.length) {
            rejectWithValue('No Data');

            return;
        }

        return result;
    },
)