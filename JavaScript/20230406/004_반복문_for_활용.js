for (let i = 0; i < 10; i++) {
    console.log(10)
}

let arr = [10, 20, 30, 40, 50]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


// airbnb 컨벤션에 권장 1.
// IE에서도 사용 가능 ( for ... in 문 )
let arr1 = [10, 20, 30, 40, 50]
let obj1 = { 'one': 10, 'two': 20 }

for (const i in arr1) {
    console.log(arr1[i]) // index를 가져온다!?
}

for (const i in obj1) {
    console.log(obj1[i]) // key를 가져온다!?
}

let s = 0
for (const i in '.'.repeat(101)) {
    s += parseInt(i)
}
console.log(s)


// airbnb 컨벤션에 권장 2.
// IE에서는 사용 불가 ( for ... of 문 )
// 개발자의 행복을 위해 익스프롤러를 버리자 => 이렇게 해야만 사용할 수 있습니다.
let arr2 = [10, 20, 30, 40, 50]
let obj2 = { 'one': 10, 'two': 20 }

for (const item of arr2) {
    console.log(item)   // value를 가져온다
}
let sum = 0;
for (const item of arr2) {
    sum += item
}
console.log(item)

for (const item of obj2) {  // of 뒤에 iterable한 값이 나와야 합니다. ****
    console.log(item)   // object는 iterable이 아님
}
for (const item of 'hello world') {
    console.log(item)
}


// length를 사용해야 깔끔한 문제들 -----------

// 문제 1. 
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length; i++) {
    console.log(s[i], s[i + 1]) // 마지막 값을 확인해보세요.
    console.log(s[i + 1] - s[i])
}

for (let i = 0; i < s.length - 1; i++) {
    console.log(s[i], s[i + 1]) // 마지막 값을 확인해보세요.
    console.log(s[i + 1] - s[i])
}

for (let i = 1; i < s.length; i++) {
    console.log(s[i - 1], s[i]) // 마지막 값을 확인해보세요.
    console.log(s[i] - s[i - 1])
}
// indexOf(Math.min(s[i]-s[i-1]의 arr))로 구하면 되긋징

// 위보다 깔끔한 코드가 나오진 않습니다.
for (const i in s) {
    console.log(parseInt(i)) // 마지막 값을 확인해보세요.
    console.log(s[i], s[parseInt(i) + 1])
    // 마지막 인덱스 처리 해줘야함, 문자열이라서 숫자로 바꿔줘야 함 
}

// 문제 2.
// 다음 수학 점수의 반평균을 구하세요
let 수학점수 = [10, 99, 89, 70]
    // step 1
    (수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]) / 수학점수.length
// step 2
let s = 0;
for (let i = 0; i < 수학점수.length; i++) {
    s += 수학점수[i];
}
console.log(s / 수학점수.length)

// 문제 3. 
// 다음 user의 나이 평균을 구하세요.
let user = [
    {
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 32,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    }
]
// 견고한 코드란?
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age가 필드가 없다면? (MongoDB의 경우)

// 나
let sum = 0;
for (const person of user) {
    sum += person.age;
}
console.log(sum / user.length)

// 풀이 1
let s = 0
for (let i = 0; i < user.length; i++) {
    console.log(user[i]['age'])
    s += user[i]['age']
}
// console.log(Math.floor(s / user.length))
console.log((s / user.length).toFixed(2))

// 풀이 2
let s = 0
for (const i of user) {
    s += i.age
}
console.log((s / user.length).toFixed(2))

// 풀이 3
let s = 0
for (const i in user) {
    s += user[i].age
}
console.log((s / user.length).toFixed(2))


// -------------------------------------------


// why? for of와 for in문에서는 const가 가능한가요?
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst
for (const i = 0; i < 10; i++) {
    console.log(10);
} // error

{
    const x = 10
    console.log(x)
}
console.log(x)

for (const i in [1, 2, 3]) {
    console.log(i)
}

for (const i of [1, 2, 3]) {
    console.log(i)
}



///// 심화 수업 /////
let user = [
    {
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 32,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 3,
        // age 프로퍼티 없음
        "name": "Lamb Adams",
        "gender": "male",
    }
]

let s = 0
for (const i of user) {
    console.log(i)
    console.log(i.age) // 마지막에 undefined
    console.log(s) // 마지막에 102
    console.log('----------')
    s += i.age // 마지막에 undefined + 102
}
console.log((s / user.length).toFixed(2))

/////////

let s = 0
for (const i of user) {
    console.log(i)
    console.log(i.age) // 마지막에 undefined
    console.log(s) // 마지막에 102
    console.log('----------')
    s += i.age ?? 0 // <------- i.age가 nullish(null, undefined)하면 0
}
console.log((s / user.length).toFixed(2))

// step 1
let s = 0
console.log(user[0])
console.log(user[0].age)
console.log(s)
console.log('----------')
s += user[0].age ?? 0

// step 2
console.log(user[1])
console.log(user[1].age)
console.log(s)
console.log('----------')
s += user[1].age ?? 0

// ... 생략 ...

/////

s = 0
for (const i of user.map(v => v.age)) {
    if (!!i) { // <------- falsy값(null, undefined, 0 ...)이 아니면!
        s += i
    }
}
s = 0
for (const i of [1, 2, 3, undefined]) {
    if (!!i) {
        s += i
    }
}
console.log((s / user.length).toFixed(2))

/////
!true // false
!false // true
!!10 // true
!!1 // true
!!-1 // true
!!0 // false
!!'hello' // true
!!NaN // false
!!undefined // false
!!null // false


////// 외우세요. /////
// user.map(v => v.age).filter(v => !!v) // 여기까지 : v값이 들어 있는 것만 더해줄 것 (falsy값 사라짐)
user
    .map(v => v.age)
    .filter(v => !!v)
    .reduce((a, b) => a + b, 0)
