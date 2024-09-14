const quotes = [
  {
    quote: '은혜로우시고 자비로우신 하나님의 이름으로',
    author: 'Al - Fatihah',
  },
  {
    quote: '온 우주의 주님이신 하나님께 모든 찬미를 드립니다.',
    author: 'Al - Fatihah',
  },
  {
    quote: '그분은 은혜로우시고 자비로우시며.',
    author: 'Al - Fatihah',
  },
  {
    quote: '심판의 날을 주관하시는 분이십니다.',
    author: 'Al - Fatihah',
  },
  {
    quote: '우리는 오직 당신만을 경배하오며 당신에게만 구원을 간구하오니',
    author: 'Al - Fatihah',
  },
  {
    quote: '저희들을 바른 길로 인도하여 주소서.',
    author: 'Al - Fatihah',
  },
  {
    quote:
      '당신께서 은총을 내리시고 노여움을 받은 자들이나 방황하는 자들이 걷지 않는 가장 올바른 길로 인도하여 주소서.',
    author: 'Al - Fatihah',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuran = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuran.quote;
author.innerText = todayQuran.author;
