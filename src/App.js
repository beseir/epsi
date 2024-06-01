import './App.css';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {
    useEffect(() =>{
        tg.ready();
    }, [])
    const tex = "$$\\[ \\sum_{n=1}^{\\infty} 2^{-n} = 1 \\]$$";
    return (
    <div className="App">
        <Latex>{tex}</Latex>
      {tg.initDataUnsafe?.user?.username}



    </div>
  );
}

export default App;
