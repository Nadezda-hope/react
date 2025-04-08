import { Loader } from '../Loader/loader';

export function State({ isLoading, isError, children }) {
    if (isLoading) {
        return <Loader />
    }

    if (isError) {
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