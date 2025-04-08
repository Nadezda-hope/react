import { RESET_FORM, CHANGE_NAME, CHANGE_TEXT, CHANGE_RATING, INITIAL_FORM_VALUES } from '../../constants/constants';

export function reducer(state, { type, payload }) {
    switch (type) {
        case RESET_FORM:
            return {
                ...INITIAL_FORM_VALUES
            };
        case CHANGE_NAME:
            return {
                ...state,
                name: payload
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: payload
            };
        case CHANGE_RATING:
            return {
                ...state,
                rating: payload
            };
        default:
            return state;
    }
}