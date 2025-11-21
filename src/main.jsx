import { createRoot } from 'react-dom/client'
import { restaurants } from './constants.js';
import { Fragment } from 'react';

const reactRoot = createRoot(document.getElementById('root'));

  reactRoot.render(
    <div>
      {restaurants.map((rest, index) => (
        <Fragment key={index}>
          <h1>{rest.name}</h1>
          <h3>Menu</h3>
          <ul>
            {rest.menu.map(menuItem => (
              <li>{menuItem.name}</li>
            ))}
          </ul>
          <h3>Reviews</h3>
          <ul>
            {rest.reviews.map(reviewText => (
              <li>{reviewText.text}</li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );

