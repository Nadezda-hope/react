import { useReducer } from 'react';
import { INITIAL_FORM_VALUES, CHANGE_NAME, CHANGE_TEXT, MAX_COUNT, MIN_COUNT, CHANGE_RATING, RESET_FORM } from '../../constants/constants';
import { reducer } from './reducer';
export function useReviewFormReducer() {
    const [form, dispatch] = useReducer(reducer, INITIAL_FORM_VALUES);

    function onNameChange(event) {
        dispatch({ type: CHANGE_NAME, payload: event });
    }

    function onTextChange(event) {
        dispatch({ type: CHANGE_TEXT, payload: event });
    }

    function onIncreaseGrade() {
        if (form.grade === MAX_COUNT) {
            return;
        }

        dispatch({ type: CHANGE_RATING, payload: form.grade + 1 });
    }

    function onDecreaseGrade() {
        if (form.grade === MIN_COUNT) {
            return;
        }

        dispatch({ type: CHANGE_RATING, payload: form.grade - 1 });
    }

    function onClickHandler() {
        dispatch({ type: RESET_FORM });
    }

    return { form, onNameChange, onTextChange, onIncreaseGrade, onDecreaseGrade, onClickHandler };
}