const preloader = document.querySelector('.preloader');
const preloaderProgressLine = document.querySelector('.preloader__progress-line');

let widthOfPreloaderProgressLine = 10;
const transitionOfPreloader = 1000; // 1s
let isLoadedPage = false;

preloaderProgressLine.style.width = `${widthOfPreloaderProgressLine}%`;

const preloaderAnimation = () => {
  function hidePreloader() {
    preloader.classList.add('preloader--hide');
    document.body.classList.remove('overflow-h');

    // after transition
    setTimeout(() => {
      preloader.style.zIndex = '-1';
    }, transitionOfPreloader);
  }

  const interval = setInterval(() => {
    if (widthOfPreloaderProgressLine <= 99) {
      // set width of preloader (10%, 11%, 12% ...)
      preloaderProgressLine.style.width = `${widthOfPreloaderProgressLine}%`;
      widthOfPreloaderProgressLine += 1;
    } else {
      // if preloader width > 99
      if (isLoadedPage) {
        // if the page loaded before the preloader reaches 100%
        preloaderProgressLine.style.width = `${widthOfPreloaderProgressLine}%`;
        hidePreloader();
        clearInterval(interval);
      }
    }
  }, 25);

  window.addEventListener('load', () => {
    isLoadedPage = true;

    if (widthOfPreloaderProgressLine > 99) {
      // if the page loaded after the preloader reaches 100%
      preloaderProgressLine.style.width = `${widthOfPreloaderProgressLine}%`;
      hidePreloader();
    }
  });
};

export default preloaderAnimation;
