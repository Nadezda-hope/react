export function ReviewList({ reviews }) {
    return (
        <ul>
            {
                reviews.map((review) => (
                    <li key={review.text}><i>{review.text}</i></li>
                ))
            }
        </ul>
    )
}