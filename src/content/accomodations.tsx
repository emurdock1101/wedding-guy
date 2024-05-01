import fancy from '../images/fancy.jpeg';
import {DetailedPage, DetailedPageItem} from './types';

const accodomationsItems: DetailedPageItem[] = [
  {
    itemTitle: 'Hotel room block #1 - Round Hill Inn',
    itemDescriptions: [
      <p>
        We have reserved a block of rooms at the&nbsp;
        <a href='https://roundhillinn.com/'>Round Hill Inn</a> in Orange, VA. Please make sure to
        fill each room with the maximum number of guests since there are a limited number of rooms
        available.
      </p>,
      <ul>
        <li>
          To book: Call <a href='tel:5406726691'>(540) 672-6691</a> and mention the block name
        </li>
        <li>Block name: Jennie and Elliot Wedding</li>
        <li>Distance: 15 minutes from the venue</li>
        <li>Deadline: Block will be held until July 27th, 2024</li>
        <li>Rooms: 14 - Double queen rooms, 7 - King and sofa bed rooms, 3 - King</li>
      </ul>,
    ],
    itemUrl: '/accomodations#roundhill',
    itemId: 'roundhill',
  },
  {
    itemTitle: 'Hotel room block #2 - Comfort Inn & Suites Orange - Montpelier',
    itemDescriptions: [
      <p>
        We have also reserved a small block of rooms at the&nbsp;
        <a href='https://comfortinnsuitesorange.com/'>Comfort Inn & Suites Orange - Montpelier</a>.
        Again, please make sure to coordinate with others to fill rooms completely.
      </p>,
      <ul>
        <li>To book: Call <a href='tel:5406726691'>(540) 672-3121</a> and mention the block name</li>
        <li>Block name: Jennie and Elliot Wedding</li>
        <li>Distance: 15 minutes from the venue</li>
        <li>Deadline: Block will be held until July 27th, 2024</li>
        <li>Rooms: 5 - Double queen rooms, 5 - King rooms</li>
      </ul>,
    ],
    itemUrl: '/accomodations#comfortinn',
    itemId: 'comfortinn',
  },
  {
    itemTitle: 'Airbnbs',
    itemDescriptions: [
      <p>
        If you prefer to stay in an Airbnb, there are&nbsp;
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
          <a href='https://www.bbvwine.com/'>Barboursville Vineyards</a>
        </li>
        <li>
          <a href='https://www.montpelier.org/'>Montpelier</a>
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
