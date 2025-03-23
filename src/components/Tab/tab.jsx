import classNames from 'classnames';
import styles from './tab.module.scss';

export function Tab({ title, onClick, isActive }) {
    return (
        <button
            className={classNames(
                styles.tab, {
                [styles.isActive]: isActive
            })}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
