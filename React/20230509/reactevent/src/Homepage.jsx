import React from 'react'

export default function Homepage({loginState}) {

    function handleLogout (e) {
        alert('안녕히가세요!')
        loginState(false)
    }
    
    return (
        <>
        <div>Homepage</div>
        <button onClick={handleLogout}>로그아웃</button>
        </>
    )
}
