'use server';

import { revalidateTag } from 'next/cache';

export async function editReviewAction({ reviewId, review }) {
    const result = await fetch(`http://localhost:3001/api/review/${reviewId}`, {
        method: 'PATCH',
        body: JSON.stringify(review),
        headers: { 'Content-Type': 'application/json' },
    });

    revalidateTag('getReviews');

    return result.json();
}