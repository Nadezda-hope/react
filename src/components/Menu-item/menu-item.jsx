import { Link } from 'react-router';
import styles from './menu-item.module.scss';

export function MenuItem({ id, name }) {
    return (
        <Link className={styles.menuItem} to={`/dish/${id}`}>
            <div>
                <h4>{name}</h4>
            </div>
        </Link>
    )
}