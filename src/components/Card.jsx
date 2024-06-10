import "../styles/Card.css"
import {useState} from "react";
export const Card = ({onClick}) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        const card = e.currentTarget.getBoundingClientRect();
        const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        const x = clientX - card.left - card.width / 2;
        const y = clientY - card.top - card.height / 2;

        setRotation({ x: y / 14, y: -x / 14 });
        onClick();
    };

    const handleMouseUp = () => {
        setRotation({ x: 0, y: 0 });
    };
    return (
        <div className={"card"}
             onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
             onTouchStart={handleMouseDown}
             onTouchEnd={handleMouseUp}
             style={{
                 transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
             }}>
            <h1 className={"card-rare-level"}>S</h1>
            <img className={"card-image"} src={"images/test.jpg"} alt={"card"}/>
            <h2>SIMPLE CARD</h2>
            <div className={"card-stats"}>
                <p>LEVEL: 1</p>
                <p>CLICK-ABILITY: 1</p>
            </div>

        </div>
    )
}