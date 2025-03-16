import { Counter } from '../Counter/counter';
import { useReviewFormReducer } from './use-review-form-reducer';

export function ReviewForm() {
    const { form, onNameChange, onTextChange, onIncreaseGrade, onDecreaseGrade, onClickHandler } = useReviewFormReducer();

    return (
        <form>
            <label> Name
                <input type="text" value={form.name} onChange={(event) => onNameChange(event.target.value)} />
            </label>
            <label> Leave your review
                <textarea type="text" value={form.text} onChange={(event) => onTextChange(event.target.value)}></textarea>
            </label>
            <Counter increment={onIncreaseGrade} decrement={onDecreaseGrade}>
                {form.grade}
            </Counter>
            <button type="reset" onClick={onClickHandler}>Clear</button>
        </form>
    )
}