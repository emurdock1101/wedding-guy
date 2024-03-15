export type DetailedPageItem = {
  itemTitle: string;
  itemDescription: string;
  itemUrl: string;
};

export type DetailedPage = {
  title: string;
  img: string;
  url: string;
  items: DetailedPageItem[];
};
