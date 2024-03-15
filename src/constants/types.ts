export type DetailedPageItem = {
  itemTitle: string;
  itemDescription: string;
  itemUrl: string;
  itemId: string;
};

export type DetailedPage = {
  title: string;
  img: string;
  img2?: string;
  url: string;
  items: DetailedPageItem[];
};
