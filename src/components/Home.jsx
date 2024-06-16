import '../styles/App.css';
import {NavPage} from "./NavPage";
import {useCallback, useEffect, useState} from "react";
import {Cap} from "./Cap";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
export const Home = () => {
    const allCaps = [
        {name: "Cap 1", click_ability: 1, durability:10},
        {name: "Cap 2", click_ability: 2, durability:10},
        {name: "Cap 3", click_ability: 1, durability:15},
    ]

    const [coins, setCoins] = useState(0);
    const [capIndex, setCapIndex] = useState(0);

    useEffect(() => {
        setCoins(12);
    }, []);

    const capChangedHandler = useCallback((e) => {
        setCapIndex(e.index);
    }, []);
    const onCapClick = useCallback(() => {
        setCoins((coins) => coins + allCaps[capIndex].click_ability)
    }, [capIndex]);


    return (
        <>
            <div className="App">
                <h1 className={"coins-text"}>{coins}</h1>

                <div className={"stats"}>
                    <h3>Name: {allCaps[capIndex].name}</h3>
                    <h3>Clicker ability: {allCaps[capIndex].click_ability}</h3>
                    <h3>Durability: {allCaps[capIndex].durability}</h3>
                </div>


                <Flicking circular={false} onChanged={capChangedHandler} onSelect={capChangedHandler}>
                    {allCaps.map((item, index) =>
                        <div key={index}> <Cap onClick={onCapClick}/></div>
                    )}
                </Flicking>


            </div>
            <NavPage/>
        </>
    )
}