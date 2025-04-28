import { redirect } from 'next/navigation';

export async function generateStaticParams() {
    return [{ restaurantId: 'bb8afbec-2fec-491f-93e9-7f13950dd80b' }, { restaurantId: 'd9241927-09e1-44f3-8986-a76346869037' }];
};

export default async function RestaurantPageContainer({ params }) {
    const { restaurantId } = await params;

    redirect(`/restaurants/${restaurantId}/menu`);
}
