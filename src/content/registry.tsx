import {DetailedPage, DetailedPageItem} from './types';

const registryItems: DetailedPageItem[] = [
  {
    itemTitle: 'Amazon registry',
    itemDescriptions: [],
    itemUrl: 'https://www.amazon.com/wedding/share/jelliotwedding',
    itemId: 'amazon',
  },
  {
    itemTitle: 'Honeymoon fund',
    itemDescriptions: [],
    itemUrl: 'https://www.honeyfund.com/site/jelliotwedding',
    itemId: 'honeymoon',
  },
];

export const registry: DetailedPage = {
  title: 'wedding registry',
  img: 'img',
  url: 'https://www.amazon.com/wedding/share/jelliotwedding',
  items: registryItems,
};
