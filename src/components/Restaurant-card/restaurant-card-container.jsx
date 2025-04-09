import { useGetRestaurantsQuery } from '../../redux/services/api-service';
import { RestaurantCard } from './restaurant-card';

export function RestaurantCardContainer({ id }) {
    const { data } = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            data: result.data?.find((item) => item.id === id)
        })
    });

    if (!data) {
        return;
    }

    return (
        <RestaurantCard
            id={id}
            name={data.name}
            img={data.img}
        />
    );
}