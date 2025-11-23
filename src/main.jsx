import { createRoot } from 'react-dom/client'
import { restaurants } from './constants.js';
import { Fragment } from 'react';

const reactRoot = createRoot(document.getElementById('root'));

  reactRoot.render(
    <div>
      {restaurants.map((rest) => (
        <Fragment key={rest.id}>
          <h2>{rest.name}</h2>
          <h3>Menu</h3>
          <ul>
            {rest.menu.map((menuItem) => (
              <li key={menuItem.id}>{menuItem.name}</li>
            ))}
          </ul>
          <h3>Reviews</h3>
          <ul>
            {rest.reviews.map((reviewText) => (
              <li key={reviewText.id}>{reviewText.text}</li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );

