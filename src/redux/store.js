import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './entities/restaurants/slice';
import { dishesSlice } from './entities/dishes/slice';
import { reviewsSlice } from './entities/reviews/slice';
import { usersSlice } from './entities/users/slice';
import { basketSlice } from './entities/basket/slice';
import { requestSlice } from './entities/request/slice';

const loggerMiddleware = (store) => (next) => (action) => {
    return next(action);
};

export const store = configureStore({
    reducer: {
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [basketSlice.name]: basketSlice.reducer,
        [requestSlice.name]: requestSlice.reducer,
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(loggerMiddleware),
})