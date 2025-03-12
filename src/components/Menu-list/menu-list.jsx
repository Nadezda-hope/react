import { MenuItem } from '../Menu-item/menu-item';
export function MenuList({ menu }) {
    return (
        <ul>
            {
                menu.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))
            }
        </ul>
    )
}