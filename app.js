const quiz = [
  {
    question: "最も売れたゲーム機は？",
    answers: [
      'ファミコン',
      'プレステーション',
      'スイッチ',
      'DS'
    ],
    correct: 'DS'
  },{
    question: "任天堂の看板ゲームと言えば？",
    answers: [
      'スーパーマリオ',
      'ドンキーコング',
      '星のカービィ',
      'MOTHER２'
    ],
    correct: 'MOTHER2'
  },{
    question: "ファイナルファンタジーの主人公は？",
    answers: [
      'クラウド',
      'てぃーだ',
      'セシル',
      'エルザ'
    ],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button')

const setupQuiz = () => {
document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonIndex = 0;
const buttonLength = $button.length;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解');
  }
  quizIndex++;
  
  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert("終了！あなたの正解数は" + score + '/' + quizLength + 'です');
    
  }
};

let handlerIndex = 0;
const buttonLength = $button.length; 
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener(`click`, (e) => {
  clickHandler(e);
  });
  handlerIndex++;
}