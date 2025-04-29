import classNames from 'classnames';
import styles from './tab.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Tab({ link, title }) {
    const pathname = usePathname();
    return (
        <Link href={link} className={classNames(styles.tab, pathname.includes(link) ? styles.isActive : '')}>
            {title}
        </Link>
    )
}
