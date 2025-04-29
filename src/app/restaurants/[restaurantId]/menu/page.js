import { MenuList } from '../../../../components/Menu-list/menu-list';

export default async function MenuPageContainer({ params }) {
    const { restaurantId } = await params;

    return <MenuList restaurantId={restaurantId} />;
}