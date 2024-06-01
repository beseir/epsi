import './App.css';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import {useEffect, useState} from "react";
import ClickerButton from "./components/ClickerButton";
const tg = window.Telegram.WebApp;
function App() {
    const [coins, setCoins] = useState(0);
    const [n, setN] = useState(0);

    const tex = "\\[ \\sum_{n=1}^{\\infty} 2{n}  = " + coins.toString() +  "\\]";
    const clickHandler = () =>{
        setN(n + 1);
        setCoins(n * 2);
    }
    useEffect(() =>{
        tg.ready();
    }, [])



    return (
    <div className="App">
        приветик {tg.initDataUnsafe?.user?.username}
        <div className={"info-container"}> <Latex className = "latex">{tex}</Latex> </div>
        <ClickerButton onClick = {clickHandler} />


    </div>
  );
}

export default App;
