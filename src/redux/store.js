import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './entities/restaurants/slice';
import { dishesSlice } from './entities/dishes/slice';
import { reviewsSlice } from './entities/reviews/slice';
import { usersSlice } from './entities/users/slice';
import { basketSlice } from './entities/basket/slice';
import { requestSlice } from './entities/request/slice';
import { apiService } from './services/api-service';

export const store = configureStore({
    reducer: {
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [basketSlice.name]: basketSlice.reducer,
        [requestSlice.name]: requestSlice.reducer,
        [apiService.reducerPath]: apiService.reducer
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiService.middleware),
})