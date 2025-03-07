import { createRoot } from 'react-dom/client';
import { restaurants } from '../material/mock';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
    <div>
        {
            restaurants.map((restaurant) => (
                <>
                    <h2>{ restaurant.name }</h2>
                    <h3>Menu</h3>
                    <ul>
                        {
                            restaurant.menu.map((item) => (
                                <li>{ item.name }</li>
                            ))
                        }
                    </ul>
                    <h3>Review</h3>
                    <ul>
                        {
                            restaurant.reviews.map((review) => (
                                <li>{ review.text }</li>
                            ))
                        }
                    </ul>
                </>
            ))
        }
    </div>
)
