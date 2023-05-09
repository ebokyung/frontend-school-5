import { useState } from "react";

import Login from './Login';
import Homepage from './Homepage';
import Modal from './Modal';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  function handleModal() {
    setShowModal(false);
  }

  function Hello(props) {
    const name = props.name;
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.

    // list map을 이용하여 h1 태그들의 리스트를 만듭니다.

    return (
      <div>
        {num.map((i) => <h1>안녕, {name} {i}호</h1>)}
      </div>
    )
  }

  return (
    <>
      <Hello />
      {isLogin ? <Homepage loginState={setIsLogin} /> : < Login infoUser={user} loginState={setIsLogin} />
      }
      {showModal && <Modal handleModal={handleModal}>
        <h2>사용약관에 대해 말씀드리겠습니다.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo repudiandae in temporibus dolor dolore suscipit, inventore molestiae molestias sunt nobis laudantium quaerat magni consectetur laborum obcaecati cum cupiditate natus.</p>
        <a href="#">더보기</a>
      </Modal>}
    </>
  )
}

export default App;