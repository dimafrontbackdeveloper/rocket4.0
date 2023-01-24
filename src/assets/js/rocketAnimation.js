const introImgWrapper = document.querySelector('.intro__img-wrapper');

const moveRocket = () => {
  introImgWrapper.style.transform = `translate(${-window.scrollY / 2}px,${-window.scrollY / 2}px)`;
};

export default moveRocket;
