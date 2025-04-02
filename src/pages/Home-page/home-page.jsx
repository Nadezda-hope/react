import { Link } from 'react-router'
import styles from './home-page.module.scss';

export function HomePage() {
    return (
        <div className={styles.homePage}>
            <Link to={'/restaurants'}>To restaurants list</Link>
        </div>
    )
}