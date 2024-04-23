import fancy from '../images/fancy.jpeg';
import {DetailedPage, DetailedPageItem} from './types';

const accodomationsItems: DetailedPageItem[] = [
  {
    itemTitle: 'Hotel room block',
    itemDescriptions: [
      <p>
        We have reserved a block of rooms at the{' '}
        <a href='https://roundhillinn.com/'>Round Hill Inn</a> in Orange, VA. The hotel is about 20
        minutes from the venue. The block is under the name Jennie and Elliot Wedding. The rate is
        $150/night. The block will be held until June 9, 2024. To book a room, please call the hotel
        at (540) 672-6690 and mention the block.
      </p>,
    ],
    itemUrl: '/accomodations#hotel',
    itemId: 'hotel',
  },
  {
    itemTitle: 'Airbnbs',
    itemDescriptions: [
      <p>
        If you prefer to stay in an Airbnb, there are{' '}
        <a href='https://www.airbnb.com/s/Madison--Virginia--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-05-01&monthly_length=3&monthly_end_date=2024-08-01&price_filter_input_type=0&channel=EXPLORE&query=Madison%2C%20VA&place_id=ChIJTwOUY20VtIkRh9nywZlpG8Q&date_picker_type=calendar&checkin=2024-08-09&checkout=2024-08-11&adults=2&source=structured_search_input_header&search_type=autocomplete_click'>
          several options in the area
        </a>
        . We recommend that you book your Airbnb as soon as possible as they tend to fill up quickly
        in the summer.
      </p>,
    ],
    itemUrl: '/accomodations#airbnbs',
    itemId: 'airbnbs',
  },
  {
    itemTitle: 'Airport',
    itemDescriptions: [
      <p>
        The closest airport to the venue is Charlottesville-Albemarle Airport (CHO). The airport is
        about 45 minutes from the venue. If you are flying in, we recommend that you rent a car or
        carpool, as there are fewer Uber/Lyft drivers in the area.
      </p>,
    ],
    itemUrl: '/accomodations#airbnbs',
    itemId: 'airbnbs',
  },
  {
    itemTitle: 'Activities in the area',
    itemDescriptions: [
      <ul>
        <li>
          <a href='https://www.monticello.org/'>Monticello</a>
        </li>
        <li>
          <a href='https://www.virginia.edu/'>University of Virginia</a>
        </li>
        <li>
          <a href='https://chilesfamilyorchards.com/carter-mountain-orchard/'>Carter's Mountain</a>
        </li>
      </ul>,
    ],
    itemUrl: '/accomodations#airbnbs',
    itemId: 'airbnbs',
  },
];

export const accomodations: DetailedPage = {
  title: 'accomodations',
  img: fancy,
  url: '/accomodations',
  items: accodomationsItems,
};
