'use server';

import { revalidateTag } from 'next/cache';

export async function addReviewAction({ restaurantId, review }) {
    const result = await fetch(`http://localhost:3001/api/review/${restaurantId}`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: { 'Content-Type': 'application/json' },
    });

    revalidateTag('getReviews');

    return result.json();
}