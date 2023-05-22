import { createStore } from "redux";

// import React from "react";
// // import ReactDOM from 'react-dom'; //구버전
// import { createRoot } from "react-dom/client";
// import App from "./App";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;


///////////////////  1. 리덕스 없이 구현하기
// let count = 0;

// // UI Update - text
// const updateResult = (c) => {
//     number.innerText = count;
//     quantity.innerHTML = c;
//     totalPrice.innerHTML = c * PRICE;
// };

// // State Change
// const addNumber = () => {
//     count += 1;
//     minus.disabled = false;
//     updateResult(count);
// };

// // State Change
// const substractNumber = () => {
//     count -= 1;
//     plus.disabled = false;
//     updateResult(count);
// };

// // Init
// number.innerHTML = count;
// updateResult(count);

// // Event
// plus.addEventListener("click", addNumber);
// minus.addEventListener("click", substractNumber);



//////////////////////  2. 리덕스로 구현하기

// 3 - dispatch 함수 선언
const addNumber = () => {
    store.dispatch({ type: "ADD" })
}
const substractNumber = () => {
    store.dispatch({ type: "SUBSTRACT" })
}
// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);


// 2 - reducer 함수 선언
const countReducer = (state = 0, action) => {
    switch (action.type) {
        case "ADD":
            minus.disabled = false;
            return state + 1;
        case "SUBSTRACT":
            plus.disabled = false;
            return state - 1;
        default: {
            return state;
        }
    }
}

// 1 - create Store
const store = createStore(countReducer);

// 4 - render 함수 만들고 구독시키키
// UI Update - text
const handleWrite = () => {
    number.innerText = store.getSate();
    quantity.innerHTML = store.getSate();
    totalPrice.innerHTML = store.getSate() * PRICE;
};
store.subscribe(handleWrite);
handleWrite();