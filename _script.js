// クローン作成の関数
const cloneElements = (element, numberOfCopies) => {
  for (let i = 0; i < numberOfCopies - 1; i++) {
    const clone = element.cloneNode(true);
    element.after(clone);
  }
};

// GSAPアニメーションの関数
const animateElements = (elements, duration) => {
  elements.forEach((el) => {
    anime({
      targets: el,
      translateX: '-100%', // テキスト全体が左に移動する
      duration: duration * 1000, // ミリ秒に変換
      easing: 'linear', // 一定速度でアニメーション
      loop: true, // 無限に繰り返す
    });
  });
};

// 複数のターゲットに対して処理を行う
document.querySelectorAll('.js-ticker').forEach((flowingTextContainer) => {
  const duration = Number(flowingTextContainer.getAttribute('data-duration')) || 10; // デフォルト値を設定
  const numberOfCopies = Number(flowingTextContainer.getAttribute('data-clone')) || 1;

  const textElement = flowingTextContainer.querySelector('.js-ticker');

  // テキストを複製
  cloneElements(textElement, numberOfCopies);

  // 複製した要素を含むリストを取得
  const textElements = flowingTextContainer.querySelectorAll('.js-ticker');

  // GSAPアニメーションを適用
  animateElements(textElements, duration);
});
