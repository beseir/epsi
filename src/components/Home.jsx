import {Card} from "./Card";
import '../styles/App.css';
import {NavPage} from "./NavPage";
import {useCallback, useState} from "react";
const tg = window.Telegram.WebApp;


export const Home = () => {
    const [coins, setCoins] = useState(0);

    const onCardClick = useCallback(() => {
        setCoins(coins + 1);
    }, [coins]);


    return (
        <>
            <div className="App">
                <h1 className={"coins-text"}>{coins}</h1>
                <h4 className={"card-preview-text"}>Привет {tg.initDataUnsafe?.user?.username}, вот твоя карточка:</h4>
                <Card onClick={onCardClick}/>
            </div>
            <NavPage/>
        </>
    )
}