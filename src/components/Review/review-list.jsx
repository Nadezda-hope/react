export function ReviewList({ reviews }) {
    return (
        <ul>
            {
                reviews.map((review) => (
                    <li key={review.text}>{review.text}</li>
                ))
            }
        </ul>
    )
}