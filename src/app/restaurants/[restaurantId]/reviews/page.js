import { ReviewList } from '../../../../components/Review-list/review-list';

export default async function ReviewPageContainer({ params }) {
    const { restaurantId } = await params;

    return <ReviewList restaurantId={restaurantId} />
}