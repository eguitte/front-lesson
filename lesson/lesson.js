'use strict';

  // const signal = "green";
  
  // switch (signal) {
  //   case "red":
  //     console.log("stop!");
  //     break;
  //   case "yellow":
  //     console.log("caution!");
  //     break;
  //   case "blue":
  //   case "green":
  //     console.log("go!");
  //     break;
  //   default:
  //     console.log("wrong signal");
  //     break;
  // }
  
  // for (let i = 1; i <= 10; i++){
  //   console.log(`hello ${i}`);
  // }
  
  let hp = -50;
  
  while (hp > 0){
    console.log(`${hp} HP`);
    hp -= 15;
  }
  
  for(let i = 1; i<= 10; i++){
    if (i % 3 === 0){
      // スキップするとき
      // continue;
    // 処理を終了させるとき
      break;
    }
    console.log(i);
  }
  
  // 関数で処理をまとめる
  function showAd(message = "Ad") {
    console.log('----------');
    console.log(`${message}`);
    console.log('----------');
  }
  
  showAd("header Ad");
    console.log('Tom is great!');
    console.log('Bob is great!');
  showAd();
    console.log('Steve is great!');
    console.log('Richard is great!');
  showAd("footer Ad");
  
//   function sum(a, b, c) {
//   // console.log(a + b + c);
//   return a + b + c;
// }

//   // sum(1, 2, 3);
//   // sum(3, 4, 5);
  
//   const total = sum(1, 2, 3) + sum(3, 4, 5); // 18
//   console.log(total);
  
  // const sum = function(a, b, c) {
  //   return a + b + c;
  // };
  
  // const total = sum(1, 2, 3) + sum(3, 4, 5);
  // console.log(total);
  
  // const sum = (a, b, c) => a + b + c;
  // const total = sum(1, 2, 3) + sum(3, 4, 5);
  // console.log(total);
  
  function f() {
    const x = 1;
    console.log(x);
  }
  f();