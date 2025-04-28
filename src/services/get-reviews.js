export async function getReviews(restaurantId) {
    const result = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`, {
        next: {
            tags: ['getReviews']
        }
    })

    return result.json();
}