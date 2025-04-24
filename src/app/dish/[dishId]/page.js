import { DishDetailsPage } from '../../../components/pages/Dish-details-page/dish-details-page';

export default async function DishPageContainer({ params }) {
    const { dishId } = await params;

    return <DishDetailsPage dishId={dishId} />
}
