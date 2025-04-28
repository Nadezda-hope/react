import { use } from 'react';
import { MenuItem } from '../Menu-item/menu-item';
import styles from './menu-list.module.scss';

export function MenuList({ menuPromise }) {
    const menu = use(menuPromise);

    if (!menu) {
        return null;
    }

    return (
        <div className={styles.menuList}>
            {
                menu.map(({ id, name }) => (
                    <MenuItem key={id} id={id} name={name} />
                ))
            }
        </div>
    )
}