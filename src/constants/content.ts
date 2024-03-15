import logo from '../images/logo.png';
import {DetailedPage, DetailedPageItem} from './types';

const accodomationsItems: DetailedPageItem[] = [
  {
    itemTitle: 'overview',
    itemDescription: 'description',
    itemUrl: '/accomodations#overview',
  },
  {
    itemTitle: 'hotels',
    itemDescription: `There are a couple hotels in Madison, VA. We've blocked off a couple rooms at the Holiday Inn Express in Orange, VA. The hotel is about 20 minutes from the venue. The block is under the name 'Murdock-Bottas Wedding'.`,
    itemUrl: '/accomodations#hotels',
  },
  {
    itemTitle: 'airbnbs',
    itemDescription: 'description2',
    itemUrl: '/accomodations#airbnbs',
  },
  {
    itemTitle: 'airport',
    itemDescription: 'description2',
    itemUrl: '/accomodations#airport',
  },
];

export const accomodations: DetailedPage = {
  title: 'accomodations',
  img: logo,
  url: '/accomodations',
  items: accodomationsItems,
};

const faqsItems: DetailedPageItem[] = [
  {
    itemTitle: 'what should I wear',
    itemDescription: 'description',
    itemUrl: '/faqs',
  },
  {
    itemTitle: 'hotels',
    itemDescription: 'description2',
    itemUrl: '/faqs',
  },
  {
    itemTitle: 'airbnbs',
    itemDescription: 'description2',
    itemUrl: '/faqs',
  },
  {
    itemTitle: 'airport',
    itemDescription: 'description2',
    itemUrl: '/faqs',
  },
];

export const faqs: DetailedPage = {
  title: 'frequently asked questions',
  img: logo,
  url: '/faqs',
  items: faqsItems,
};
