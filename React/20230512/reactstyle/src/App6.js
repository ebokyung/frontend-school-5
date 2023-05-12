import React from "react";
import { Button, ButtonStyle2, ButtonStyle3, ButtonStyle4 } from './Components/Buttons'
const App = () => {
    return (
        <div>
            <Button>버튼1</Button>
            <ButtonStyle2 color='black'>버튼2</ButtonStyle2>
            <ButtonStyle3 bgColor='lightgreen'>버튼3</ButtonStyle3>
            <ButtonStyle4>버튼4</ButtonStyle4>
        </div>
    );
};

export default App;