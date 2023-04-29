// const test = [
//     { title: '새로운 메모', content: '내용입니다', len: 1, time: '2024-04-27' },
//     {
//         title: '새로운 멤모', content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum natus corrupti undenisiat dignissimos, itaque soluta facilis quos, eligendi sed vitae ad exercitationem sapiente quod modi ratione!
//     Repellendus, delectus.`, len: 2, time: '2024-04-13'
//     },
//     {
//         title: '새로운 멤모', content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum natus corrupti undenisiat dignissimos, itaque soluta facilis quos, eligendi sed vitae ad exercitationem sapiente quod modi ratione!
//     Repellendus, delectus.`, len: 3, time: '2024-04-20'
//     },
//     {
//         title: '새로운 멤모', content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum natus corrupti undenisiat dignissimos, itaque soluta facilis quos, eligendi sed vitae ad exercitationem sapiente quod modi ratione!
//     Repellendus, delectus.`, len: 4, time: '2024-04-07'
//     },
// ]

// localStorage.setItem("allMemo", JSON.stringify(test));

//////

const frag = document.createDocumentFragment();
const memoForm = document.querySelector('form'), memoList = document.querySelector('.list-item');

// 메모장 초기화
let allMemo = JSON.parse(localStorage.getItem("allMemo"));
allMemo = allMemo ?? [];
render();


// 렌더링
// ? - 띄어쓰기 등 그대로 반영하는 방법
function render() {
    memoList.innerHTML = '';

    for (const item of allMemo) {
        const li = document.createElement('li');
        li.innerHTML = `<article class="memo-article">
        <time class="article-time" datetime="${item.time}">${item.time}</time>
        <h3 class="article-title">${item.title}</h3>
        <p class="article-content">${item.content}</p>
        <div class="article-buttons">
        <button id="${item.len}" class="btn-edit" type="button" disabled>수정</button>
        <button id="${item.len}" class="btn-delete" type="button">삭제</button>
        </div>
        </article>`
        frag.append(li);
    }

    memoList.append(frag);
}



// 메모 추가하기
// ? - 고유 id 가지는 방법
function addMemo() {
    const title = document.getElementById('memo-title');
    const content = document.getElementById('memo-content');

    // 메모 등록 시간
    const today = new Date();
    const year = today.getFullYear();
    const month = ('00' + (today.getMonth() + 1)).slice(-2);
    const date = ('00' + today.getDate()).slice(-2);
    let hour = ('00' + today.getHours()).slice(-2);
    let minute = ('00' + today.getMinutes()).slice(-2);
    const time = year + '-' + month + '-' + date + ' ' + hour + ':' + minute;

    // 전체 메모 배열에 추가
    allMemo.push({ title: `${title.value}`, content: `${content.value}`, len: allMemo.length + 1, time })

    // 로컬스토리지에 전체 목록 다시 반영
    localStorage.setItem("allMemo", JSON.stringify(allMemo));

    title.value = '';
    content.value = '';
}

function handleSubmit(e) {
    e.preventDefault(); // reload 막기
    addMemo();
    render();
}

memoForm.addEventListener("submit", handleSubmit);



// 메모 삭제하기
function deleteMemo(e) {
    if (confirm('삭제하시겠습니까?')) {
        // time과 len 둘 다 체크
        const postIdx = e.srcElement.id;
        const postTime = e.target.closest('article').firstElementChild.innerText;

        // 해당 메모 잘라내기
        allMemo.splice(
            allMemo.findIndex(i => i.len == postIdx && i.time == postTime),
            1
        )

        // 로컬스토리지에 전체 목록 다시 반영
        localStorage.setItem("allMemo", JSON.stringify(allMemo));
    }
}

memoList.addEventListener('click', e => {
    // 메모 삭제 이벤트
    if (e.target.type === 'button' && e.target.className === 'btn-delete') {
        deleteMemo(e)
        render()
    }
})