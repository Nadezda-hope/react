import { Loader } from '@/components/Loader/loader';
import { MenuList } from '@/components/Menu-list/menu-list';
import { getDishes } from '@/services/get-dishes';
import { Suspense } from 'react';

export default async function MenuPageContainer({ params }) {
    const { restaurantId } = await params;
    const menuPromise = getDishes(restaurantId);

    return (
        <Suspense fallback={<Loader />}>
            <MenuList menuPromise={menuPromise} />
        </Suspense>
    )
}