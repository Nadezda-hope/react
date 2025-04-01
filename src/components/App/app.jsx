import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { HomePage } from '../../pages/Home-page/home-page';
import { RestaurantPage } from '../../pages/Restaurant-page/restaurant-page';
import { RestaurantsPage } from '../../pages/Restaurants-page/restaurants-page';
import { store } from '../../redux/store';
import { Layout } from '../Layout/layout';
import { MenuList } from '../Menu-list/menu-list';
import { ReviewList } from '../Review-list/review-list';
import { ThemeContext } from '../Theme-context/theme-context';
import { UserContext } from '../User-context/user-context';
import './app.module.scss';
import { DishDetails } from '../Dish-details/dish-details';

export function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <ThemeContext>
                    <UserContext>
                        <Routes>
                            <Route element={<Layout />}>
                                <Route index element={<HomePage />} />
                                <Route path='/restaurants' element={<RestaurantsPage />}>
                                    <Route path=':restaurantId' element={<RestaurantPage />}>
                                        <Route index path='*' element={<Navigate to={'menu'} />} />
                                        <Route path='menu' element={<MenuList />} />
                                        <Route path='reviews' element={<ReviewList />} />
                                    </Route>
                                </Route>
                                <Route path='/dish/:dishId' element={<DishDetails />}></Route>
                            </Route>
                        </Routes>
                    </UserContext>
                </ThemeContext>
            </Provider >
        </BrowserRouter>
    );
}
