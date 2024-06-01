import './App.css';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {
    useEffect(() =>{
        tg.ready();
    }, [])
    const tex = "\\[ \\sum_{n=1}^{\\infty} 2^{-n} = 1 \\]";
    return (
    <div className="App">
        {tg.initDataUnsafe?.user?.username}

        <div className={"latex-container"}> <Latex className = "latex">{tex}</Latex> </div>



    </div>
  );
}

export default App;
