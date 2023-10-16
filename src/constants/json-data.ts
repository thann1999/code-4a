import { TwitterPost } from '@root/interfaces';

const FOLLOW_BACK_CODE = `
/**
 * @author cmcglobal.eth <Twitter: @thann199>
 */

const MAX_FOLLOW_COUNT = 20; // follow 20 user
const DELAY = 1000; // 1s
const SCREEN_HEIGHT =
  document.documentElement.clientHeight -
  document.getElementsByClassName('r-1e5uvyk')[1].getBoundingClientRect().height -
  120;
let scrollCount = 1;
let followCount = 0;

function checkVisible(element) {
  const rect = element.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function follow(index, element) {
  setTimeout(() => {
    element.firstChild.click();
  }, index * DELAY);
}

document.addEventListener('scrollend', () => {
  const followerTab = document.querySelector("[aria-label='Dòng thời gian: Người theo dõi']");
  const followerList = followerTab.getElementsByClassName('r-42olwf');
  let currentCount = 0;

  for (let index = 0; index < followerList.length; index += 1) {
    if (followCount >= MAX_FOLLOW_COUNT) {
      break;
    }

    const item = followerList[index];
    const boundary = item.parentNode.parentNode.parentNode.parentNode.parentNode;
    const visible = checkVisible(boundary);

    if (!visible) {
      break;
    }

    currentCount += 1;
    followCount += 1;
    follow(index, item);
  }

  if (followCount < MAX_FOLLOW_COUNT) {
    setTimeout(() => {
      window.scrollTo({
        top: SCREEN_HEIGHT * scrollCount,
        behavior: 'smooth',
      });
      scrollCount += 1;
    }, DELAY * currentCount);
  }
});

window.scrollBy(0, 3);`;

export const TWITTER_POST: TwitterPost[] = [
  {
    id: 1,
    title: 'Code follow chéo trên X',
    description:
      'Hướng dẫn sử dụng code để tăng tương tác, follow chéo trên X nhanh nhất hoàn toàn miễn phí',
    imgCode: 'https://drive.google.com/uc?id=1J3McDbSmgROayXY-WcAOoMR4ZRHtXvg5',
    href: 'https://twitter.com/thann199/status/1709825416607977776',
    content: FOLLOW_BACK_CODE,
  },
];
