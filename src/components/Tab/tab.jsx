import classNames from 'classnames';
import styles from './tab.module.scss';
import { NavLink } from 'react-router';

export function Tab({ link, title }) {
    return (
        <NavLink to={link} className={({ isActive }) => classNames(styles.tab, isActive && styles.isActive)}>
            {title}
        </NavLink>
    )
}
