export const MIN_COUNT = 0;
export const MAX_COUNT = 5;

export const RESET_FORM = 'RESET_FORM';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const CHANGE_RATING = 'INCREASE_RATING';

export const INITIAL_FORM_VALUES = {
    name: '',
    text: '',
    grade: 1
};

// #region state
export const IDLE = 'idle';
export const PENDING = 'pending';
export const REJECTED = 'rejected';
export const FULFILLED = 'fulfilled';
//#endregion