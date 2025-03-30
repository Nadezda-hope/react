import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../../material/normalized-mock';

const initialState = {
    entities: normalizedUsers.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}),
    ids: normalizedUsers.map((item) => item.id),
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    selectors: {
        selectUserById: (state, id) => state.entities[id],
        selectUsersIds: (state) => state.ids
    }
});

export const { selectUserById, selectUsersIds } = usersSlice.selectors;