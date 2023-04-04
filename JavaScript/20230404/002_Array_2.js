// filter
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr1.filter(function(el) {
    return el % 2 === 0 // 짝수
})

function solution(n) {
    return Array(n)
        .fill() // undefined로 채워짐
        .map((_, i) => i + 1) //value는 안쓸거고, index 쓸거얀
        .filter((v) => v % 2 === 0)
        .reduce((a, c) => a + c, 0);
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2.filter(function(el) {
    return el % 2 !== 0 // 홀수
})

// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v))


// reduce
const arr3 = [1, 2, 3, 4, 5]
arr3.reduce((a,c) => a+c, 0)

const arr4 = []
arr4.reduce((a,c) => a+c) //TypeError

const arr5 = [1]
arr5.reduce((a,c) => a+c) //1

// 항상 0을 넣어주세요.
const arr6 = []
arr6.reduce((a,c) => a+c, 0)

// min, max도 있는데 sum이 없다?


// includes
const arr7 = ['hello', 'world', 'hojun']
arr7.includes('world')

const arr8 = ['hello', 'world', 'hojun']
arr8.includes('leehojun')

const arr9 = ['hello', 'world', 'hojun']
arr9.includes('jun') // false


// join
const arr10 = ['hello', 'world', 'hojun']
arr10.join('!')

const arr11 = ['010', '5044', '2903']
arr11.join('-')

const arr12 = [010, 5044, 2903]
arr12.join('-') // 이렇게 하시면 안됩니다. 010을 이진법으로 인식합니다
// 0b010 // b는 바이너리의 첫글자입니다.
// 0o100 // b는 옥타의 첫글자입니다.
// 0x100 // b는 헥사의 첫글자입니다.