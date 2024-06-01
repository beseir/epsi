import './App.css';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {
    useEffect(() =>{
        tg.ready();
    }, [])
    const tex = "$$latex = {vanya}^{beloded}$$";
    return (
    <div className="App">
        Привет {tg.initDataUnsafe?.user?.username}
        <img alt = "user avatar" src={tg.initDataUnsafe?.user?.photo_url}/>


    </div>
  );
}

export default App;
