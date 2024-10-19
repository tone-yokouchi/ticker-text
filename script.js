// 要素の複製
const cloneElements = (element, numberOfCopies) => {
  for (let i = 0; i < numberOfCopies - 1; i++) {
    const clone = element.cloneNode(true);
    element.after(clone);
  }
};

// アニメーションの時間設定
const setDuration = (element, setSpeed) => {
  const tickerText = element;
  const textWidth = tickerText.offsetWidth;
  const speed = setSpeed || 50;
  const animationDuration = textWidth / speed;

  tickerText.style.animationDuration = `${animationDuration}s`;
};

// 複数の要素に対応
document.querySelectorAll('.js-ticker').forEach((element) => {
  const numberOfCopies = Number(element.getAttribute('data-clone')) || 5;
  const speed = Number(element.getAttribute('data-speed'));
  const textElement = element.querySelector('.js-ticker-text');

  cloneElements(textElement, numberOfCopies);

  const textElements = element.querySelectorAll('.js-ticker-text');
  textElements.forEach((el) => {
    setDuration(el, speed);
  });
});
