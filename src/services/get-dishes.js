export async function getDishes(restaurantId) {
    const result = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`)

    return result.json();
}