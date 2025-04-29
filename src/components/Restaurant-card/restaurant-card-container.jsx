import { RestaurantCard } from './restaurant-card';

export async function RestaurantCardContainer({ children, data }) {
    const { id, name, img } = data;

    return (
        <RestaurantCard
            id={id}
            name={name}
            img={img}
        >{children}</RestaurantCard>
    );
}