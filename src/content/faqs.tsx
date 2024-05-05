import faq from '../images/faqs.png';
import {DetailedPage, DetailedPageItem} from './types';

const faqsItems: DetailedPageItem[] = [
  {
    itemTitle: `What's the dress code?`,
    itemDescriptions: [
      <p>
        The dress code for our wedding is Cocktail attire. We suggest that men wear a suit or dress
        shirt, tie optional. Women can wear a maxi-, midi-, or knee-length dress or dressy
        separates. The colors are pastels. Think “garden party”.
      </p>,
      <p>
        Additionally, there is a pool at the venue so bring swimwear with you'd like to take a dip
        during the reception… We definitely will be.
      </p>,
    ],
    itemUrl: '/faqs#whattowear',
    itemId: 'whattowear',
  },
  {
    itemTitle: `Can I bring kids, pets, or plus ones?`,
    itemDescriptions: [
      <p>
        Our wedding will be an Adults Only event. We unfortunately can not accommodate kids or pets
        at our wedding.
      </p>,
      <p>
        Sadly, due to budget and space limitations, we simply can’t afford for all of our lovely
        guests to bring a guest of their own. Therefore, we regretfully ask our guests to please not
        bring a plus one, unless they are specifically named on the invitation. Thank you so much
        for understanding!
      </p>,
    ],

    itemUrl: '/faqs#kidsandpets',
    itemId: 'kidsandpets',
  },
  {
    itemTitle: `Can I park at the venue?`,
    itemDescriptions: [
      <p>
        There is a grass pasture on the venue property where guests will be able to park. When
        making arrival plans please note the fenced parking area is grass, not gravel, and there is
        a slight decline. Additionally, there will be a short walk from the parking area to the
        ceremony and reception area.
      </p>,
    ],

    itemUrl: '/faqs#parking',
    itemId: 'parking',
  },
  {
    itemTitle: `What time should I arrive?`,
    itemDescriptions: [
      <p>
        For guests invited to the ceremony, please note that the processional will begin promptly at
        4pm, so plan to be parked and walking to find your seats no later than 3:45pm.
      </p>,
      <p>
        For our Evening Only guests, please arrive between 5:30pm and 6pm to join us for cocktail
        hour.
      </p>,
    ],
    itemUrl: '/faqs#time',
    itemId: 'time',
  },
  {
    itemTitle: `What is the best way to get to the venue?`,
    itemDescriptions: [
      <p>
        If you are able, please try to carpool with other guests that have the same call time. Note:
        the wedding is in Madison, VA and Uber/Lyft drivers will not be plentiful.
      </p>,
      <p>There will be a shuttle for guests staying in the Hotel Block we have reserved.</p>,
    ],
    itemUrl: '/faqs#transport',
    itemId: 'transport',
  },
  {
    itemTitle: `Is the venue indoors or outdoors?`,
    itemDescriptions: [
      <p>Outdoors. Please dress accordingly (sunscreen, sunnies, no hats, deodorant).</p>,
    ],
    itemUrl: '/faqs#outdoors',
    itemId: 'outdoors',
  },
  {
    itemTitle: `Will the wedding be postponed if there is inclement weather?`,
    itemDescriptions: [<p>No. We have a plan for inclement weather conditions.</p>],
    itemUrl: '/faqs#weather',
    itemId: 'weather',
  },
  {
    itemTitle: `What is the RSVP deadline?`,
    itemDescriptions: [
      <p>
        Please fill out our <a href='https://docs.google.com/forms/d/1L3qqvdgZWBq8l9BcqG_K32oAnSjjWFOZW2G_nG-LYeU/viewform?edit_requested=true'>RSVP form</a> no later
        than June 9, 2024.
      </p>,
    ],
    itemUrl: '/faqs#rsvp',
    itemId: 'rsvp',
  },
  {
    itemTitle: `Can I take pictures during the ceremony?`,
    itemDescriptions: [
      <p>
        We want to see you, not your lens! Please refrain from taking your phones and other cameras
        out during our ceremony. We have a photographer who will be taking photos, don’t worry.
      </p>,
    ],
    itemUrl: '/faqs#rsvp',
    itemId: 'rsvp',
  },
  {
    itemTitle: `Will there be an open bar?`,
    itemDescriptions: [
      <p>
        Yes sir! We will be providing simple cocktail ingredients, wine, beers, and seltzers. We
        will not have a designated bartender so we encourage you to get creative!
      </p>,
    ],
    itemUrl: '/faqs#rsvp',
    itemId: 'rsvp',
  },
];

export const faqs: DetailedPage = {
  title: 'frequently asked questions',
  img: faq,
  url: '/faqs',
  items: faqsItems,
};
