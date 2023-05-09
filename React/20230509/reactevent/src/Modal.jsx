import './Modal.css'

export default function Modal(props) {
    return (
    <div className='modal-backdrop'>
        <article className='modal'>
            {/* <h2>홈페이지에 오신것을 환영합니다!</h2>
            <p>좋은하루 되세요</p> */}
            {props.children}
            <button type='button'>닫기</button>
        </article>
    </div>
    )
}
