import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {},
    reducers: {
        addToBasket: (state, { payload }) => {
            state[payload] = (state[payload] || 0) + 1;
        },
        removeFromBasket: (state, { payload }) => {
            if (!state[payload]) {
                return state;
            }

            state[payload] = state[payload] - 1;

            if (state[payload] <= 0) {
                delete state[payload];
            }
        },
    },
    selectors: {
        selectDishItems: (state) => Object.keys(state).reduce((acc, id) => {
            acc.push({ id, amount: state[id] });

            return acc;
        }, []),
        selectCountByDishId: (state, id) => state[id],
    }
});

export const { selectDishItems, selectCountByDishId } = basketSlice.selectors;
export const { addToBasket, removeFromBasket } = basketSlice.actions;