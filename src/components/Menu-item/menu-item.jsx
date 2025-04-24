import Link from 'next/link';
import styles from './menu-item.module.scss';

export function MenuItem({ id, name }) {
    return (
        <Link className={styles.menuItem} href={`/dish/${id}`}>
            <h4>{name}</h4>
        </Link>
    )
}