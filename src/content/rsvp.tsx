import {DetailedPage, DetailedPageItem} from './types';

const rsvpItems: DetailedPageItem[] = [
  {
    itemTitle: 'Please RSVP soon',
    itemDescriptions: [],
    itemUrl: 'https://forms.gle/vuugfrmkfJhumsHt5',
    itemId: 'rsvp',
  },
];

export const rsvp: DetailedPage = {
  title: 'rsvp',
  img: 'img',
  url: 'https://forms.gle/vuugfrmkfJhumsHt5',
  items: rsvpItems,
};
