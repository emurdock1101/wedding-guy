import faq from '../images/faqs.png';
import fancy from '../images/fancy.jpeg';
import engaged from '../images/engaged.jpeg';
import date from '../images/date.jpeg';
import {DetailedPage, DetailedPageItem} from './types';

//#region accomodations
const accodomationsItems: DetailedPageItem[] = [
  {
    itemTitle: 'overview',
    itemDescription:
      'So far we have not made any hotel accodomoations. Madison, VA is a little bit far from civilization so we are looking into a few options. We will update this page as soon as we have more information.',
    itemUrl: '/accomodations#overview',
    itemId: 'overview',
  },
  {
    itemTitle: 'hotels',
    itemDescription: `There are a couple hotels in Madison, VA. We'll hopefully block off a couple rooms in Orange, VA which is about 20 minutes from the venue.`,
    itemUrl: '/accomodations#hotels',
    itemId: 'hotels',
  },
  {
    itemTitle: 'airbnbs',
    itemDescription: 'We suggest trying to find Airbnbs as close as possible to the venue.',
    itemUrl: '/accomodations#airbnbs',
    itemId: 'airbnbs',
  },
  {
    itemTitle: 'airport',
    itemDescription:
      'The Charlottesville/Albermarle airport is the closest airport to the venue. It is about 45 minutes away.',
    itemUrl: '/accomodations#airport',
    itemId: 'airport',
  },
];

export const accomodations: DetailedPage = {
  title: 'accomodations',
  img: fancy,
  url: '/accomodations',
  items: accodomationsItems,
};
//#endregion accomodations

//#region faqs
const faqsItems: DetailedPageItem[] = [
  {
    itemTitle: 'what should I wear',
    itemDescription:
      'Cocktail attire, such as cocktail dresses or jumpsuits for women and a button down shirt with jacket for men. No tie required! Also, be sure to bring a swimming suit if you want to take a dip in the pool.',
    itemUrl: '/faqs#whattowear',
    itemId: 'whattowear',
  },
  {
    itemTitle: 'can I bring kids or pets',
    itemDescription: 'No, we are not able to accommodate kids or pets.',
    itemUrl: '/faqs#kidsandpets',
    itemId: 'kidsandpets',
  },
  {
    itemTitle: 'can I park at the venue',
    itemDescription:
      'Yes, there is plenty of parking at the venue. Though we do suggest carpooling if possible. It is fine to leave your car overnight.',
    itemUrl: '/faqs#parking',
    itemId: 'parking',
  },
];

export const faqs: DetailedPage = {
  title: 'frequently asked questions',
  img: faq,
  url: '/faqs',
  items: faqsItems,
};
//#endregion faqs

//#region registry
const registryItems: DetailedPageItem[] = [
  {
    itemTitle: 'water filter system',
    itemDescription: '',
    itemUrl:
      'https://www.amazon.com/dp/B00CYW3EVO?colid=1N30JYYTLDYGP&coliid=I2JFRBZ49GU2NZ&ref_=awr_guest_view_modal_pt',
    itemId: 'waterfilter',
  },
  {
    itemTitle: 'eletric kettle',
    itemDescription: '',
    itemUrl:
      'https://www.amazon.com/dp/B005YR0F40?colid=1N30JYYTLDYGP&coliid=I3O0K1ZCXXD0YI&ref_=awr_guest_view_modal_pt',
    itemId: 'kettle',
  },
  {
    itemTitle: 'pots and pans',
    itemDescription: '',
    itemUrl:
      'https://www.amazon.com/dp/B08XM1B6ZX?colid=1N30JYYTLDYGP&coliid=I2XLFJXVFIXTMM&ref_=awr_guest_view_modal_pt',
    itemId: 'potsandpans',
  },
  {
    itemTitle: 'changing your name kit',
    itemDescription: '',
    itemUrl:
      'https://www.amazon.com/dp/B07W2YTPMD?ref_=wedding_guest_view_product_tile&colid=1N30JYYTLDYGP&coliid=ICMDTABHYY9OP',
    itemId: 'namechange',
  },
  {
    itemTitle: 'knives and utensils',
    itemDescription: '',
    itemUrl:
      'https://www.amazon.com/dp/B0BNPVN3Z9?ref_=wedding_guest_view_product_tile&colid=1N30JYYTLDYGP&coliid=I3B7IY7KLPL5SJ',
    itemId: 'knives',
  },
  {
    itemTitle: 'kitchen mixer',
    itemDescription: '',
    itemUrl:
      'https://www.amazon.com/dp/B00007G309?colid=1N30JYYTLDYGP&coliid=I34WYD9QRDPP3H&ref_=awr_guest_view_modal_pt',
    itemId: 'mixer',
  },
  {
    itemTitle: 'dutch oven',
    itemDescription: '',
    itemUrl:
      'https://www.amazon.com/dp/B07QDGN33D?ref_=wedding_guest_view_product_tile&colid=1N30JYYTLDYGP&coliid=I29FOC3X3BWTAO',
    itemId: 'dutchoven',
  },
];

export const registry: DetailedPage = {
  title: 'wedding registry',
  img: 'img',
  url: 'https://www.amazon.com/wedding/registry/1N30JYYTLDYGP',
  items: registryItems,
};
//#endregion registry

//#region rsvp
const rsvpItems: DetailedPageItem[] = [
  {
    itemTitle: 'please rsvp soon',
    itemDescription: '',
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
//#endregion rsvp

//#region ourstory
const ourstoryItems: DetailedPageItem[] = [
  {
    itemTitle: 'how we met',
    itemDescription: `We met at Carter's Mountain while we were both on dates with other people.`,
    itemUrl: '/ourstory#howwemet',
    itemId: 'howwemet',
  },
  {
    itemTitle: 'the first date',
    itemDescription: 'Our first date was in Culpeper, VA. We went to a restaurant called Steak.',
    itemUrl: '/ourstory#thefirstdate',
    itemId: 'thefirstdate',
  },
  {
    itemTitle: 'trials and tribulations',
    itemDescription: 'Jennie cut things off for a while. Elliot was persistent.',
    itemUrl: '/ourstory#trialsandtribulations',
    itemId: 'trialsandtribulations',
  },
  {
    itemTitle: 'turning the tide',
    itemDescription: 'Elliot won Jennie back using logic and reason.',
    itemUrl: '/ourstory#turningthetide',
    itemId: 'turningthetide',
  },
  {
    itemTitle: 'proposal',
    itemDescription:
      'Elliot proposed to Jennie at the top of a mountain in the Shenandoah National Park.',
    itemUrl: '/ourstory#proposal',
    itemId: 'proposal',
  },
];

export const ourstory: DetailedPage = {
  title: 'our story',
  img: engaged,
  img2: date,
  url: '/ourstory',
  items: ourstoryItems,
};
//#endregion ourstory

//#region gallery
const galleryItems: DetailedPageItem[] = [
  {
    itemTitle: 'view photos from our life',
    itemDescription: '',
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
//#endregion gallery
