import './App.css';
import Menu from './components/menu/Menu'
import NewMenu from './components/newMenu/NewMenu'
import TripList from './components/tripList/TripList'

function App() {
  // 주석 입니다.
  /* 
  * 주석입니다 
  */

  const someStyle = { backgroundColor: "black", color: "white" };
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  // const someStyle2 = { backgroundColor: "royalblue", color: "white" }
  // let list = [
  //   { no: 1, area: "대전", visited: false },
  //   { no: 2, area: "부산", visited: true },
  //   { no: 3, area: "목포", visited: false },
  //   { no: 4, area: "제주도", visited: false },
  // ];


  return (
    <div className="App">
      {/* JSX 안의 주석 입니다 */}
      <input type="radio" checked={false} />
      <NewMenu />
      <Menu />
      <h1 hello="hi" >안녕 라이캣!!</h1>
      <h1 style={{}}>안녕 라이캣 2호!!</h1>


      {/*  실습1. */}
      <div style={someStyle}>
        <p style={{ color: 'red' }}>년 : {year}</p>
        <p>월/일 : {month}/{date}</p>
        <p>시간 : {hour}시 {min}분 {sec}초</p>
      </div>


      {/* 실습2. */}

      {/* 보경 */}
      {/* <ul>
        {list.map(i => i.visited ? <li style={someStyle2}>{i.area}</li> : <li>{i.area}</li>)}
      </ul> */}

      {/* 재현님 */}
      <TripList />
    </div>
  );
}

export default App;
