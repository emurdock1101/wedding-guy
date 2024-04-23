export type DetailedPageItem = {
  itemTitle: string;
  itemDescriptions: JSX.Element[];
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
