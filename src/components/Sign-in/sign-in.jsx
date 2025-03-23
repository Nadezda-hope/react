import { use } from 'react';
import { Button } from '../Button/button';
import { UserContext } from '../User-context';
import styles from './sign-in.module.scss';

export function SignIn() {
    const { user, authorize } = use(UserContext);

    return (
        <div className={styles.signIn}>
            {
                user ? (
                    <>
                        <div className={styles.signIn__user}>
                            <div className={styles.signIn__avatar}>{user.name[0].toUpperCase()}{user.surname[0].toUpperCase()}</div>
                            <div className={styles.signIn__name}>{user.name} {user.surname}</div>
                        </div>
                        <Button onClickHandler={authorize}>
                            Log out
                        </Button>
                    </>
                )
                    :
                    <Button onClickHandler={authorize}>
                        Log in
                    </Button>
            }
        </div>
    )
}