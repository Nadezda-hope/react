import { useReducer, useState } from 'react';
import { Counter } from '../Counter/counter';
import { RESET_FORM, CHANGE_NAME, CHANGE_TEXT, CHANGE_RATING, INITIAL_FORM_VALUES, MAX_COUNT, MIN_COUNT } from '../../constants/constants';
import { reducer } from './reducer';

export function ReviewForm() {
    const [form, dispatch] = useReducer(reducer, INITIAL_FORM_VALUES);
    const { name, text, grade } = form;

    function onNameChange(event) {
        dispatch({ type: CHANGE_NAME, payload: event });
    }

    function onTextChange(event) {
        dispatch({ type: CHANGE_TEXT, payload: event });
    }

    function onIncreaseGrade() {
        if (grade === MAX_COUNT) {
            return;
        }

        dispatch({ type: CHANGE_RATING, payload: grade + 1 });
    }

    function onDecreaseGrade() {
        if (grade === MIN_COUNT) {
            return;
        }

        dispatch({ type: CHANGE_RATING, payload: grade - 1 });
    }

    function onClickHandler() {
        dispatch({ type: RESET_FORM });
    }

    return (
        <form>
            <label> Name
                <input type="text" value={name} onChange={(event) => onNameChange(event.target.value)} />
            </label>
            <label> Leave your review
                <textarea type="text" value={text} onChange={(event) => onTextChange(event.target.value)}></textarea>
            </label>
            <Counter increment={onIncreaseGrade} decrement={onDecreaseGrade}>
                {grade}
            </Counter>
            <button type="reset" onClick={onClickHandler}>Clear</button>
        </form>
    )
}