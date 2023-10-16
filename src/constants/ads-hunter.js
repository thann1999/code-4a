const DELAY = 1000; // 1s
const scrollYCount = 3;

function checkVisible(element) {
  const rect = element.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

document.addEventListener('scrollend', () => {
  const firstPost = document.querySelector('article');
  const visible = checkVisible(firstPost);

  if (!visible) {
    window.scrollTo({
      top: scrollYCount + 100,
      behavior: 'smooth',
    });
  }

  firstPost.click();

  // Interact with post: Like, comment

  // window.scrollTo({
  //   top: scrollYCount,
  //   behavior: 'smooth',
  // });
});
