import styles from './loader.module.scss';

export function Loader() {
    return (
        <div className={styles.loader}>
            <svg className={styles.loader__svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.2881 12C19.2881 16.4183 15.7064 20 11.2881 20C8.80145 20 6.57978 18.8655 5.11249 17.0858L3.56859 18.3573C5.4027 20.5818 8.17979 22 11.2881 22C16.811 22 21.2881 17.5228 21.2881 12C21.2881 6.47715 16.811 2 11.2881 2C7.64717 2 4.46071 3.94581 2.71188 6.85427L4.42713 7.88341C5.82619 5.55665 8.37536 4 11.2881 4C15.7064 4 19.2881 7.58172 19.2881 12Z" fill="tomato" />
            </svg>
        </div>
    )
}