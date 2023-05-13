/*
** Home Page : /
** Product Detail Page : /products/:id
**    ex) /products/1 , /products/2, /products/3, /products/4
** Product Detail Notice Page : /products/:id/notice
**    ex) /products/1/notice , /products/2/notice …
** Cart Page : /cart
** Coupon Page : /users/coupon
** Question Page : /users/question
** Notice Page : /users/notice
** User Page : /users
*/

import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1>Home</h1>
            <hr />
            <p>products ...</p>
        </>
    )
}
function ProductsDetail() {
    return (
        <>
            <h1>products Detail</h1>
            <hr />
            <Link to="notice">products detail notice</Link>
        </>
    )
}
function ProductsDetailNotice() {
    return <h1>products Detail Notice</h1>
}
function Cart() {
    return (
        <>
            <h1>Cart</h1>
            <hr />
        </>
    )
}
function Coupon() {
    return <h1>Coupon</h1>
}
function Question() {
    return <h1>Question</h1>
}
function Notice() {
    return <h1>Notice</h1>
}
function User() {
    return (
        <>
            <h1>User</h1>
            <hr />
            <Link to="coupon">Coupon</Link>
            <Link to="question">Queistion</Link>
            <Link to="notice">Notice</Link>
        </>
    )
}

export default function AppQuiz() {
    return (
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/users">Users</Link>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products/:id' element={<ProductsDetail />}>
                    <Route path='notice/' element={<ProductsDetailNotice />} />
                </Route>
                <Route path='/cart' element={<Cart />} />
                <Route path='/users/*' element={<Outlet />}>
                    <Route path='' element={<User />} />
                    < Route path='coupon/' element={<Coupon />} />
                    <Route path='question/' element={<Question />} />
                    <Route path='notice/' element={<Notice />} />
                </Route>
            </Routes >
        </BrowserRouter >
    )
}


