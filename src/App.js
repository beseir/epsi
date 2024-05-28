import './App.css';
import ClickerButton from "./components/ClickerButton";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

function App() {

    return (
    <div className="App">

        <Latex>{"$$latex = {vanya}^{beloded}$$"}</Latex>

    </div>
  );
}

export default App;
