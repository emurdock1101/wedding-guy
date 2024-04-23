import {DetailedPage, DetailedPageItem} from './types';

const rsvpItems: DetailedPageItem[] = [
  {
    itemTitle: 'Please RSVP soon',
    itemDescriptions: [],
    itemUrl: 'https://www.google.com/forms/about/',
    itemId: 'rsvp',
  },
];

export const rsvp: DetailedPage = {
  title: 'rsvp',
  img: 'img',
  url: 'https://www.google.com/forms/about/',
  items: rsvpItems,
};
