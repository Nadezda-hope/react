import { IDLE, PENDING, REJECTED } from '../../constants/constants';
import { Loader } from '../Loader/loader';

export function State({ state, children }) {
    if (state === IDLE || state === PENDING) {
        return <Loader />
    }

    if (state === REJECTED) {
        return (
            <div>Something went wrong</div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}