// 각 컴포넌트들을 가지고 옵니다!
import Hello from './Components/Hello';
import Time from './Components/Time';
import Resume from './Components/Resume';
import ColorText from './Components/ColorText';

function App() {
  return (
    <div>
      <Hello name="개리" />
      <Time />
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue" />
      <div>
        <ColorText color="red" />
        <ColorText color="green" />
        <ColorText color="blue" />
      </div>
    </div>
  );
}

export default App;