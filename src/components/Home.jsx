import axios from 'axios';
import {Card} from "./Card";
import '../styles/App.css';
import {NavPage} from "./NavPage";
import {useEffect, useState} from "react";
const tg = window.Telegram.WebApp;


export const Home = () => {
    const [loading, setLoading] = useState(true);
    const userId = "1"; // Уникальный идентификатор пользователя
    const [coins, setCoins] = useState(0);

    useEffect(() => {
        const fetchclicks = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/clicks/${userId}`);
                setCoins(response.data.clicks);
            } catch (error) {
                console.error('Error fetching clicks:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchclicks();
    }, []);

    const addCoins = async () => {
        try {
            const response = await axios.post(`http://localhost:5000/api/clicks/${userId}`, {
                clicks: 98
            });
            setCoins(response.data.clicks);
        } catch (error) {
            console.error('Error adding clicks:', error);
        }
    };

    if (loading) return <div>Loading...</div>;


    return (
        <>
            <div className="App">
                <h1 className={"coins-text"}>{coins}</h1>
                <h4 className={"card-preview-text"}>Привет {tg.initDataUnsafe?.user?.username}, вот твоя карточка:</h4>
                <Card onClick={addCoins}/>
            </div>
            <NavPage/>
        </>
    )
}