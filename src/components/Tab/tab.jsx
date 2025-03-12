export function Tab({ title, cb }) {
    return (
        <button onClick={cb}>{title}</button>
    )
}
