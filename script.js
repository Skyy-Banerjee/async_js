//! sync vs async?
/*
1. One after another -> Synchronous
2. All at once, not waiting for one task to fully complete/finish -> Asynchronous

Ex.
task a - 5 sec
task b - 2 sec
task c - 15 sec
task d - 1 sec

Thus, maximum completion time: 15 seconds
*/

//! How to know whether it's asynchronous code or not?
/* 
Ex:
1. setTimeout
2. setInterval
3. promises
4. fetch
5. axios
6. XmLHttpRequest

Except the above 6, all type of fx/works are synchronous.
*/

//! What is asynchronous js?
/*
ROUGH EPLANATION:

Often, our final code is dependent on someone else's/external server. In such a case/scenario, we don't know after how long will the answer/response be returned from the external server, so, we can't just write plain synchronous code. To solve this, we write asynchronous code in order to  avoid blocking and deal with the returned response accordingly. 

todo => summary: we don't know how long and do something depending upon the returned response.

Ex (in Hindi) :- Instagram se photo leke aao, aur jab photo aajaaye, show kar dena!
*/

//todo=> Ex.
console.log('hey'); //runs first
setTimeout(function () {
	console.log('hey async, after 2 secs'); //runs third
}, 2000);
console.log('hey sync'); //runs second

//! But, JS isn't async by nature, as it's not multi-threaded!!!

//main stack => execution (always synchronuous code)
//side stack => always asynchronous code, only runs after main stack is empty

console.log('hey 1');
console.log('hey 2');
setTimeout(function () {
	console.log('hey 3'); //runs at the end
}, 3000);
console.log('hey 4');
console.log('hey 5');

//! Callbacks
//Callbacks always run after the completion of async code
/*
1. fetch
2. axios
3. promises
4. setTimeout
5. setInterval

The response=>
then,catch, async-await
*/

//fetch(`https://www.facebook.com`).then...

/*

todo: 2 main parts of ASYNC code..

1. Writing asynchronous code -
a) fetch
b) axios
c) XMLHttpRequest
d) promises
e) setTimeout
f) setInterval

2. Running the responses/answers back from those async code(s) -
a) Callbacks
b) then-catch
c) async-await
*/

//! Promises
//Code that runs in the near future
//2 outcomes => resolve OR reject (pending before that)
//We save it in any variable

//Ex.1
const resp = new Promise((res, rej) => {
	if (true) {
		return res();
	} else {
		return rej();
	}
});

resp
	.then(function () {
		console.log('Resolved');
	})
	.catch(function () {
		console.log('Rejected :(');
	});

//Ex.2 - user will ask for a number between 0 and 9, and if the number is below 5, then resolve, otherwise reject it.

const num = new Promise((resolve, reject) => {
	const randNumber = Math.floor(Math.random() * 10);
	randNumber < 5 ? resolve() : reject();
});

num
	.then(function () {
		console.log('below 5, resolved');
	})
	.catch(function () {
		console.log('above 5, rejected');
	});

//Ex.3
//Async tasks, but to we want/need to complete the one by one:
//1. sabse pehle ghar par aao
//2. gate kholo aur gate lagao
//3. khana pakao, khana khao
//4. Sojaao, kyonki thak gaye ho

const task1 = new Promise(function (resolve, reject) {
	return resolve('sabse pehle ghar par aao');
});

const task2 = task1.then(function (data) {
	console.log(data);
	new Promise(function (resolve, reject) {
		return resolve('gate kholo aur gate lagao');
	});
});

const task3 = task2.then(function (data) {
	console.log(data);
	return new Promise(function (resolve, reject) {
		return resolve('khana pakao, khana khao');
	});
});

const task4 = task3.then(function (data) {
	console.log(data);
	return new Promise(function (resolve, reject) {
		return resolve('Sojaao, kyonki thak gaye ho');
	});
});

//! Async-Await
// Syntax sugar and lean code on any fx() where we write async code, i.e - to avoid 'then's and callback hells.

async function abcd() {
	const resp = await fetch('https://randomuser.me/api/'); //side stack
	const data = await resp.json();
	console.log(data);
}
//Whenever any code is async, we neeed to wait for it, as we don't know when the response will return. Thus, the KW- 'await'
abcd();

//todo: 5 real world use cases =>

/*
Generally, when the data is dependent on external sources
1. When we work with DB in node
2. fetch
3. setTimeout
4. setInterval
5. axios
*/

//todo: [concept aside]
//! concurrency and parallelism

/*

concurrency => When both sync and async code runs together, in main stack and side stack respectively.

parallelism => Focusses more on different processors and working on it's different cores.

Also,
throttling => Controlling no. of executions in code, optimization techniques.

*/
