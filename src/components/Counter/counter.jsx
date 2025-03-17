export function Counter({ children, decrement, increment }) {
    return (
        <>
            <button onClick={decrement} type='button'>-</button>
            <span>{children}</span>
            <button onClick={increment} type='button'>+</button>
        </>
    );
}