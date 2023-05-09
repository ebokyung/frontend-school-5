/* 
* 1. 시간/분/초 입력할 수 있습니다.
* 2. Start를 누르면 타이머가 1초 단위로 감소합니다.
* 3. Pause를 누르면 타이머가 멈춥니다.
* 4. 다시 Start를 누르면 재시작됩니다.
* 5. 0초가 되면 초기화 됩니다.
* 6. Reset을 누르면 초기화 됩니다.
*/

const hour = document.querySelector('.hour'),
    min = document.querySelector('.min'),
    sec = document.querySelector('.sec');

const startBtn = document.querySelector('.btn-start'), resetBtn = document.querySelector('.btn-reset');

hour.addEventListener('click', () => {
    hour.textContent = ('00' + (parseInt(hour.textContent) + 1)).slice(-2);
    if (hour.textContent == 23) {
        hour.textContent = '00'
    } else {
        hour.textContent = ('00' + (parseInt(hour.textContent) + 10)).slice(-2);
    }
}
);

min.addEventListener('click', () => {
    if (min.textContent == 55) {
        min.textContent = '00'
    } else {
        min.textContent = ('00' + (parseInt(min.textContent) + 5)).slice(-2);
    }
}
);

sec.addEventListener('click', () => {
    if (sec.textContent == 50) {
        sec.textContent = '00'
    } else {
        sec.textContent = ('00' + (parseInt(sec.textContent) + 10)).slice(-2);
    }
}
);

resetBtn.addEventListener('click', () => {
    // clearTimer()
})

startBtn.addEventListener('click', () => {
    // pause 버튼으로 바꾸기 

    // const timer = setTimeiterval()
})


