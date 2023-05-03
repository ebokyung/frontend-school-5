const article = document.querySelector('.popup'), openBtn = document.querySelector('.btn-open'), closeBtn = article.querySelector('.btn-close');


function closePopup() {
    article.classList.remove('active');
}

openBtn.addEventListener('click', () => {
    article.classList.add('active');
})
closeBtn.addEventListener('click', closePopup)

// 첫 번째 포커스 요소
const firstEl = article.querySelector("a")

closeBtn.addEventListener('keydown', (e) => {
    // console.log(e.key);
    if (!e.shiftKey && e.key === "Tab") {
        // console.log('tab만 누름');
        e.preventDefault();
        firstEl.focus();
    }
})

firstEl.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.key === "Tab") {
        // console.log('shift + tab');
        e.preventDefault();
        closeBtn.focus();
    }
})

const dim = document.querySelector('.dim');
dim.addEventListener('click', closePopup)