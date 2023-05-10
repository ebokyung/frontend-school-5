// 조건부 렌더링
import React from 'react'

function One(props) {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

function Two(props) {
    return (
        <div>
        <h1>name이 입력된 것이 없습니다.</h1>
        </div>
    )
}
// function NoName() {
//   return (
//     <div>
//       <h1>이름을 입력하지 않았습니다.</h1>
//     </div>
//   )
// }


export default function Name(props) {

    const name = props.name;

    if (name) {
        return <One name={name} />
    } else {
        return <Two />
    }
}
