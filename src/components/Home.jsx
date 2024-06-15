import '../styles/App.css';
import {NavPage} from "./NavPage";
import {useEffect, useState} from "react";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import {Cap} from "./Cap";

const tg = window.Telegram.WebApp;


export const Home = () => {
    const [coins, setCoins] = useState(0);
    useEffect(() => {
        setCoins(12);
    }, []);


    return (
        <>
            <div className="App">
                <h1 className={"coins-text"}>{coins}</h1>
                <h4 className={"card-preview-text"}>Привет {tg.initDataUnsafe?.user?.username || "username"}, вот твоя коллекция:</h4>
                <Flicking circular={false}>
                    <div><Cap/></div>
                    <div><Cap/></div>
                    <div><Cap/></div>
                </Flicking>


            </div>
            <NavPage/>
        </>
    )
}