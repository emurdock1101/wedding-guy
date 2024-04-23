import engaged from '../images/engaged.jpeg';
import date from '../images/date.jpeg';
import {DetailedPage, DetailedPageItem} from './types';

const ourstoryItems: DetailedPageItem[] = [
  {
    itemTitle: 'How we met',
    itemDescriptions: [
      <p>
        Elliot and Jennie met on September 8, 2022 at Carter Mountain Orchard in Charlottesville,
        Virginia. He was a boy, she was a girl, so naturally, they were on dates with other people.
        Elliot was on a double date with mutual friends when Jennie walked over with her date.
        Elliot made some joke about the moon looking like it was heading into a trash can and Jennie
        didn’t laugh because she didn't know that she was supposed to. The Lord, in His goodness,
        didn’t connect Elliot and Jennie again until they had been single for a few months.
      </p>,
    ],

    itemUrl: '/ourstory#howwemet',
    itemId: 'howwemet',
  },
  {
    itemTitle: 'The first date',
    itemDescriptions: [
      <p>
        After reconnecting on a ski trip to Wintergreen in January 2023, Elliot used ChatGPT to help
        him write a letter asking out Jennie. He composed the letter on a Chipotle napkin,
        safety-pinned it shut and left it in her shoe. Jennie, after several days of walking past
        the shoe (for it was in her “to be donated” pile), finally found the napkin one evening and
        agreed to the date with a GIF. They met midway between Charlottesville and Arlington at a
        steakhouse in Culpepper on a Monday. Before they were even seated, they got into a
        discussion about air fryers and microwaves (Jennie foolishly used to think microwaves were
        superior to air fryers). The wine flowed and so did the conversation. After dinner, Elliot
        tried to teach Jennie how to drive stick shift and after that proved futile, they spent
        hours listening to sad music and stargazing.
      </p>,
    ],
    itemUrl: '/ourstory#thefirstdate',
    itemId: 'thefirstdate',
  },
  {
    itemTitle: 'Trials and tribulations',
    itemDescriptions: [
      <p>
        Jennie and Elliot’s relationship was tested when Jennie called Elliot after their first
        weekend and explained that she wasn't interested in a romantic endeavor. Elliot was
        devastated to learn he was back in the friend zone. He kept hanging out with her and went
        shooting with her in Fredericksburg one weekend.
      </p>,
    ],
    itemUrl: '/ourstory#trialsandtribulations',
    itemId: 'trialsandtribulations',
  },
  {
    itemTitle: 'Turning the tide',
    itemDescriptions: [
      <p>
        Elliot won Jennie back using logic and reason.{' '}
        <s>
          It wasn't his first time escaping the friend zone, and it certainly won't be his last.
        </s>
      </p>,
    ],
    itemUrl: '/ourstory#turningthetide',
    itemId: 'turningthetide',
  },
  {
    itemTitle: 'Dating',
    itemDescriptions: [
      <p>
        Jennie and Elliot officially began dating early March 2023. With 2 & 1/2 hours between them,
        they often had long phone calls, midweek meetups in Culpepper, and weekend visits whenever
        they could. They took a road trip down to Florida and quickly fell in love. They made many
        more trips including to Maine, Tennessee, Pennsylvania, Ohio, and all around Virginia.
      </p>,
    ],
    itemUrl: '/ourstory#dating',
    itemId: 'dating',
  },
  {
    itemTitle: 'Proposal',
    itemDescriptions: [
      <p>
        Elliot proposed to Jennie at the top of a mountain in the Shenandoah National Park. He had
        known within the first six weeks of dating that this was the correct woman for him. With the
        help of his boys, he successfully plotted a failed hiking attempt to turn into a beautiful
        meadow proposal. Nailed it.
      </p>,
    ],
    itemUrl: '/ourstory#proposal',
    itemId: 'proposal',
  },
  {
    itemTitle: 'Where are they now?',
    itemDescriptions: [
      <p>Chilling in Arlington. Still going on adventures and loving the people around them.</p>,
    ],
    itemUrl: '/ourstory#where',
    itemId: 'where',
  },
];

export const ourstory: DetailedPage = {
  title: 'our story',
  img: engaged,
  img2: date,
  url: '/ourstory',
  items: ourstoryItems,
};
