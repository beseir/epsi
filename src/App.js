import './App.css';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import {useEffect, useState} from "react";
import ClickerButton from "./components/ClickerButton";
import {Shop} from "./components/Shop";
const tg = window.Telegram.WebApp;
function App() {
    const [coins, setCoins] = useState(0);
    const [n, setN] = useState(1);
    const [multiplier, setMultiplier] = useState(1);
    const buyMultiplier = () => {
        if(coins >= 10000){
            setMultiplier(multiplier + 1);
            setCoins(coins - 10000)
        }
    }

    const tex = "\\[ \\sum_{n=1}^{\\infty} " + multiplier.toString() + "{n}  = " + coins.toString() +  "\\]";
    const clickHandler = () =>{
        setN(n + 1);
        setCoins(coins + n * multiplier);
    }

    useEffect(() =>{
        tg.ready();
    }, [])

    return (
    <div className="App">
        приветик {tg.initDataUnsafe?.user?.username}
        <div className={"info-container"}> <Latex className = "latex">{tex}</Latex> </div>

        <ClickerButton onClick = {clickHandler} />

        <Shop buyMultiplier={buyMultiplier}/>

    </div>
  );
}

export default App;
