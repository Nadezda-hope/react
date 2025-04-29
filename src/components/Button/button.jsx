import { use } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';
import { ThemeContext } from '../Theme-context';

export function Button({ onClickHandler, children, isDisabled, formAction }) {
    const { theme } = use(ThemeContext);
    return (
        <button className={classNames(styles.button, {
            [styles.isLight]: theme === 'light',
            [styles.isDark]: theme === 'dark'
        })}
            onClick={onClickHandler}
            disabled={isDisabled}
            formAction={formAction}
        >
            {children}
        </button>
    );
}