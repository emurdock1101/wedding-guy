import {DetailedPage, DetailedPageItem} from './types';
const galleryItems: DetailedPageItem[] = [
  {
    itemTitle: 'View photos from our life',
    itemDescriptions: [],
    itemUrl: '/gallery',
    itemId: 'gallery',
  },
];

export const gallery: DetailedPage = {
  title: 'gallery',
  img: 'img',
  url: '/gallery',
  items: galleryItems,
};
