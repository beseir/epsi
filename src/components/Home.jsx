import {Card} from "./Card";
import '../styles/App.css';
import {NavPage} from "./NavPage";
const tg = window.Telegram.WebApp;
export const Home = () => {
    return (
        <>
            <div className="App">
                <h4 className={"card-preview-text"}>Привет {tg.initDataUnsafe?.user?.username}, вот твоя карточка:</h4>
                <Card/>

            </div>
            <NavPage/>
        </>
    )
}