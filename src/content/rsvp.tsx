import {DetailedPage, DetailedPageItem} from './types';

const rsvpItems: DetailedPageItem[] = [
  {
    itemTitle: 'Please RSVP soon',
    itemDescriptions: [],
    itemUrl: 'https://docs.google.com/forms/d/1L3qqvdgZWBq8l9BcqG_K32oAnSjjWFOZW2G_nG-LYeU/viewform?edit_requested=true',
    itemId: 'rsvp',
  },
];

export const rsvp: DetailedPage = {
  title: 'rsvp',
  img: 'img',
  url: 'https://docs.google.com/forms/d/1L3qqvdgZWBq8l9BcqG_K32oAnSjjWFOZW2G_nG-LYeU/viewform?edit_requested=true',
  items: rsvpItems,
};
