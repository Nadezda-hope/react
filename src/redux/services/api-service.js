import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    tagTypes: ['reviews'],
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => '/restaurants'
        }),
        getRestaurant: builder.query({
            query: (restaurantId) => `/restaurant/${restaurantId}`
        }),
        getDishesByRestaurantId: builder.query({
            query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`
        }),
        getDish: builder.query({
            query: (dishId) => `/dish/${dishId}`
        }),
        getReviewsByRestaurantId: builder.query({
            query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
            providesTags: [{ type: 'reviews', id: 'all' }]
        }),
        getUsers: builder.query({
            query: () => `/users`
        }),
        addReview: builder.mutation({
            query: ({ restaurantId, review }) => ({
                url: `/review/${restaurantId}`,
                body: review,
                method: 'POST'
            }),
            invalidatesTags: ['reviews']
        }),
        editReview: builder.mutation({
            query: ({ reviewId, review }) => ({
                url: `/review/${reviewId}`,
                body: review,
                method: 'PATCH'
            }),
            invalidatesTags: ['reviews']
        })
    })
});

export const {
    useGetRestaurantsQuery,
    useGetRestaurantQuery,
    useGetDishesByRestaurantIdQuery,
    useGetDishQuery,
    useGetReviewsByRestaurantIdQuery,
    useGetUsersQuery,
    useAddReviewMutation,
    useEditReviewMutation
} = apiService;
