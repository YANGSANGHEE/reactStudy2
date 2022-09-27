

//  callback

// const wait = (inpuStr, callback) => {
//   setTimeout(() => {
//     console.log(inpuStr);
//     callback();
//   }, 500)
// }

// wait('a', () => {
//   wait('b', () => {
//     wait('c', () => {
//       return;
//     })
//   })
// })

// prosmise

// const waits = inputStr => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(inputStr);
//       resolve();
//     }, 500);
//   })
// }

// waits('a')
//   .then(() => waits('b'))
//   .then(() => waits('c'));

//promise2

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(100); // 기본 value 설정
//   }, 1000);
// }).then(res1 => { // 기본 value 100
//   console.log('res1', res1); // '100,100
//   return res1 + 100; // return 100+100 = 200
// }).then(res2 => {
//   console.log('res2', res2);
//   return res2 + 200;
// }).then(res3 => { console.log('res3', res3) });

//promise3

// const promi = new Promise((resolve, reject) => {
//   resolve(2)// 기본 value 2로 세팅
// })

// const double = num => num * 2 // 매개변수로 들어오는 값 *2

// promi
//   .then(double)//4
//   .then(double)//8
//   .then(result => console.log(result))//8
//   .then(test => console.log(test)) // 위에서 리턴값이 없음
//   .catch(err => console.log(err));




//promise4

// const promi = new Promise((resolve, reject) => {
//   resolve(2) // 기본 value값 세팅
// });

// const Triple = num => num * 3

// promi
//   .then(Triple)
//   .then(Triple)
//   .then(result => console.log(result))
//   .then(test => console.log(test))
//   .then(() => {
//     throw Error('error')
//   })
//   .catch(err => console.log('err'));




//promise4

// const promi2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'hello'); // 1초뒤에 호출
// });
// const promi3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'promi3~'); //3초뒤에 호출
// });
// const promi1 = Promise.resolve(3);

// promi2
//   .then(result => console.log(result))
//   .then(() => promi3)
//   .then((result) => console.log(result))
//   .then(() => promi1)
//   .then((result) => console.log(result))
//   .catch(err => console.log('error'))




// promise All

// const promi1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'promi1');
// })

// const promi2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, 'promi2')
// })

// const promi3 = Promise.resolve(3);

// Promise.all([promi1, promi2, promi3]).then(result => console.log(result)); // promise 병렬 처리




// promise All2

// const promi1 = Promise.resolve('promi1');
// const promi2 = Promise.resolve('promi2');
// const promi3 = Promise.resolve('promi3');

// Promise.all([promi1, promi2, promi3])
//   .then(r => console.log(r))
//   .catch(err => console.log('err'));



//Example

// const arrFunc = [];
// for (let i = 0; i < 5; i++) {
//   const func = (resolve) => {
//     //delay 처리 (0~2초)
//     const delayMsec = 2000 * Math.random();

//     setTimeout(() => {
//       console.log(`처리${i}시작`, new Date().toLocaleTimeString());
//       resolve();
//     }, delayMsec);
//   };
//   arrFunc.push(func);
// }

// const arrPromise = arrFunc.map((func) => new Promise(func));

// console.log(arrPromise);

// Promise.all(arrPromise).then(() => { console.log('모든작업이 완료되었습니다.') })



// promise 직렬처리

// const promi1 = Promise.resolve('안농');
// const promi2 = Promise.resolve('안농2');

// promi1.then(result => setTimeout(() => { console.log(result) }, 1000))
// .then(() => promi2)
// .then(result => setTimeout(() => { console.log(result) }, 2000))

// let promiarr = [];

// promiarr.push(promi1, promi2);

// console.log(promiarr);

// Promise.all(promiarr).then(result => console.log(result));



// async await

// start();

// async function start() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('안뇽')
//       resolve()
//     }, 1000);
//   });

//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('안뇽22');
//       resolve()
//     }, 2000);
//   });
// }

// other Example

// let names = ['a', 'b', 'c', 'd', 'e']
//
// let request = names.map((value) => fetch(`http://api.github.com/users/${value}`));
// console.log(request);
//
// Promise.all(request)
// .then(responses => {
// request 실행처리가 완료 되었을때
// console.log('응답이 완료됨');
// for (let response of responses) {
// console.log(`${response.url} : ${response.status}`) // 모든 응답코드는 200
// }
// return responses;
// })
// .then(responses => Promise.all(responses.map(r => r.json())))
// 응답 메세지가 담긴 배열을 response.json()으로 매칭 후 내용 읽음
// .then(users => users.forEach(user => console.log(user.name)))

// const arrFunc = [];

// for (let i = 0; i < 5; i++) {
//   const func = (resolve) => {
//     console.log(`처리시작${i}`);

//     setTimeout(() => {
//       console.log(`처리시작${i}`);
//       resolve();
//     }, 1000);
//   }
//   arrFunc.push(func);
// }

// console.log(arrFunc);

// const newArrFunc = arrFunc.map((value) => new Promise(value));
// console.log(newArrFunc);

// Promise.all(newArrFunc)
//   .then(result => console.log(result));

// const proArr = [];

// for (let i = 0; i < 5; i++) {
//   const func = (resolve) => {
//     // console.log(`처리시작${i}`);

//     setTimeout(() => {
//       console.log(`처리시작${i}`);
//       resolve();
//     }, 1000);
//   }
//   proArr.push(func);
// }

// console.log(proArr);

// excute()

// async function excute() {
//   for (let i = 0; i < proArr.length; i++) {
//     const func = proArr[i];
//     await new Promise(func);
//   }
// }

// let a = setTimeout(() => { console.log('a') }, 3000);
// let b = setTimeout(() => { console.log('b') }, 2000);
// let c = setTimeout(() => { console.log('c') }, 1000);

// function Numbers() {
//   setTimeout(() => {
//     console.log('a')
//     setTimeout(() => {
//       console.log('b')
//       setTimeout(() => {
//         console.log('c')
//       }, 1000)
//     }, 2000)
//   }, 3000)
// }

// Numbers();

// let alphabet = ['a', 'b', 'c'];
// let newArr = [];

// for (let i = 0; i < alphabet.length; i++) {
//   // console.log(alphabet[i]);

//   const func = (resolve) => {
//     setTimeout(() => {
//       console.log(alphabet[i]);
//       resolve();
//     }, 1000);
//   }
//   newArr.push(func);
// }

// let newArrval = newArr.map(value => new Promise(value))
// console.log(newArrval);

// // console.log(newArr);
// Promise.all(newArrval).then(result => console.log(result));


// const promi1 = Promise.resolve('a');
// const promi2 = Promise.resolve('B');
// const promi3 = Promise.resolve('C');

// Promise.all([promi1, promi2, promi3]).then((result) => console.log(result));

const sanghee = {
  name: '양상희',
  age: '29',
  face: '존예',
  str: '존나쎔'
}

const str = JSON.stringify(sanghee);

console.log(str)