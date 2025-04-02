import { useParams } from 'react-router';
import { DishDetails } from '../../components/Dish-details/dish-details';

export function DishDetailsPage() {
    const { dishId } = useParams();

    return (
        <DishDetails dishId={dishId} />
    )
}