import { redirect } from 'next/navigation';

export default async function RestaurantPageContainer({ params }) {
    const { restaurantId } = await params;

    redirect(`/restaurants/${restaurantId}/menu`);
}
