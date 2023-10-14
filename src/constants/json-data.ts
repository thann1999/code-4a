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
    title: 'Code follow chéo trên X',
    description:
      'Hướng dẫn sử dụng code để tăng tương tác, follow chéo trên X nhanh nhất hoàn toàn miễn phí',
    imgCode: 'https://drive.google.com/uc?id=1vGetOfM5WcUeq2aN4dwToNBYeAbGz1i4',
    href: 'https://twitter.com/thann199/status/1709825416607977776',
    content: FOLLOW_BACK_CODE,
  },
];
