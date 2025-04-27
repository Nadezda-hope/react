import { DishDetails } from '../../../components/Dish-details/dish-details';

export default async function DishPageContainer({ params }) {
    const { dishId } = await params;

    return <DishDetails dishId={dishId} />
}
