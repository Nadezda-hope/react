import { MenuItem } from '../Menu-item/menu-item';
import styles from './menu-list.module.scss';

export function MenuList({ menuIds }) {
    return (
        <ul className={styles.menuList}>
            {
                menuIds.map((id) => (
                    <MenuItem key={id} id={id} />
                ))
            }
        </ul>
    )
}