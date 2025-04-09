import { useCallback, useReducer } from 'react';
import { INITIAL_FORM_VALUES, CHANGE_NAME, CHANGE_TEXT, MAX_COUNT, MIN_COUNT, CHANGE_RATING, RESET_FORM } from '../../constants/constants';
import { reducer } from './reducer';
export function useReviewFormReducer({ review }) {
    const [form, dispatch] = useReducer(
        reducer,
        review
            ? { name: '', text: review.text, rating: review.rating }
            : INITIAL_FORM_VALUES
    );

    const onNameChange = useCallback((event) => {
        dispatch({ type: CHANGE_NAME, payload: event });
    }, []);

    const onTextChange = useCallback((event) => {
        dispatch({ type: CHANGE_TEXT, payload: event });
    }, []);

    const onIncreaseGrade = useCallback(() => {
        if (form.rating === MAX_COUNT) {
            return;
        }

        dispatch({ type: CHANGE_RATING, payload: form.rating + 1 });
    }, [form.rating]);

    const onDecreaseGrade = useCallback(() => {
        if (form.rating === MIN_COUNT) {
            return;
        }

        dispatch({ type: CHANGE_RATING, payload: form.rating - 1 });
    }, [form.rating]);

    const onClickHandler = useCallback(() => {
        dispatch({ type: RESET_FORM });
    }, []);

    return { form, onNameChange, onTextChange, onIncreaseGrade, onDecreaseGrade, onClickHandler };
}