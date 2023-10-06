import followBack from '@assets/images/follow-back.png';
import { TwitterPost } from '@root/interfaces';

const FOLLOW_BACK_CODE = `
document.addEventListener('scroll', () => {
  const followerList = document.getElementsByClassName('r-19u6a5r');
  for (const item of followerList) {
    if (['Follow', 'Theo dõi'].includes(item.innerText)) {
      item.firstChild.click();
    }
  }
});

function pageScroll() {
  setInterval(() => {
    window.scrollBy(0, 3);
  }, 10);
}

pageScroll();`;

export const TWITTER_POST: TwitterPost[] = [
  {
    id: 1,
    title: 'Tool follow chéo trên X',
    description:
      'Hướng dẫn sử dụng tool để tăng tương tác, follow chéo trên X nhanh nhất hoàn toàn miễn phí',
    imgCode: followBack,
    href: 'https://twitter.com/thann199/status/1709825416607977776',
    content: FOLLOW_BACK_CODE,
  },
];
