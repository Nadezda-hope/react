import { Suspense } from 'react';
import Loading from './loading';
import { ReviewList } from '@/components/Review-list/review-list';

export default async function ReviewPageContainer({ params }) {
    const { restaurantId } = await params;

    return (
        <Suspense fallback={<Loading />}>
            <ReviewList restaurantId={restaurantId} />
        </Suspense>
    )
}