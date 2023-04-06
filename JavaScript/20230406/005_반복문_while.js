let x = 0
while (x < 10) {
    // console.log('start')
    console.log(x)
    x += 1
    // console.log('end') //없으면 10까지 출력된다 !? 단순 반환된 값임.
}

// why? 10까지 출력이 되는가? -----
// 일반 JS에서는 출력되지 않습니다.
// 콘솔에서만 출력됩니다.
let x = 0
while (x < 10) {
    console.log(x)
    x += 1
}

let x = 0
while (x < 10) {
    console.log(x)
    x += 1
    console.log('')
}
// ----------------------------

////

let input;

do {
    input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");

////

let input;

do {
    input = confirm('다음에도 저희와 함께 하시겠습니까?')
} while (!input);

console.log("감사합니다.");

////

// 암기코드 1 ( 구구단 )
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

{
    let i = 2; // 초기화 중요
    while (i < 10) {
        let j = 1;  // 초기화 중요
        while (j < 10) {
            console.log(`${i} x ${j} = ${i * j}`);
            j++
        }
        i++
    }
} // 블럭으로 감싸주면 i랑 j 둘 다 안남음

////

// 암기코드 2 ( 거꾸로 출력하기 )
let s = 'hello world'
let result = ''
for (let i = 0; i < s.length; i++) {
    // result = result + s[i]
    result = s[i] + result
}
console.log(result)

let s = 'hello world'
let cnt = 0;
let result = '';
while (cnt < s.length) {
    result = s[cnt] + result
    cnt++;
}
console.log(result)


////

// 암기코드 3 ( 팩토리얼 )
// 팩토리얼
// 5! = 5 * 4 * 3 * 2 * 1
let s = 1;
for (let i = 1; i < 6; i++) {
    s *= i
}
console.log(s)

let s = 1;
i = 1;
while (i < 6) {
    s *= i
    i += 1
}

console.log(s)