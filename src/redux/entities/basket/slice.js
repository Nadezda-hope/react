import { createSelector, createSlice } from '@reduxjs/toolkit';

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
        selectCountByDishId: (state, id) => state[id],
    }
});

export const { selectCountByDishId } = basketSlice.selectors;
export const { addToBasket, removeFromBasket } = basketSlice.actions;
const selectBasketSlice = (state) => state.basket;

export const selectDishItems = createSelector([selectBasketSlice], (basket) => Object.keys(basket).reduce((acc, id) => {
    acc.push({ id, amount: basket[id] });

    return acc;
}, []));