export async function getDishById(dishId) {
    const result = await fetch(`http://localhost:3001/api/dish/${dishId}`)

    return result.json();
}