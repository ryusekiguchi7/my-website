// ひらがな（「を」を除く、濁音・半濁音含む）
const hiragana = [
  'あ','い','う','え','お',
  'か','き','く','け','こ',
  'が','ぎ','ぐ','げ','ご',
  'さ','し','す','せ','そ',
  'ざ','じ','ず','ぜ','ぞ',
  'た','ち','つ','て','と',
  'だ','ぢ','づ','で','ど',
  'な','に','ぬ','ね','の',
  'は','ひ','ふ','へ','ほ',
  'ば','び','ぶ','べ','ぼ',
  'ぱ','ぴ','ぷ','ぺ','ぽ',
  'ま','み','む','め','も',
  'や','ゆ','よ',
  'ら','り','る','れ','ろ',
  'わ'  // 「を」は除外
];


// ランダムに3文字選ぶ関数
function generateRandomWord() {
  let word = '';
  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * hiragana.length);
    word += hiragana[index];
  }
  return word;
}

// ページ読み込み時に一度表示
document.getElementById("randomText").textContent = generateRandomWord();

// ボタン押下で新しい文字列を表示
document.getElementById("generateBtn").addEventListener("click", () => {
    document.getElementById("randomText").textContent = generateRandomWord();
});