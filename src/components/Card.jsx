import "../styles/Card.css"
import {useState} from "react";
export const Card = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        const card = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - card.left - card.width / 2;
        const y = e.clientY - card.top - card.height / 2;
        setRotation({ x: y / 15, y: -x / 15 });
    };

    const handleMouseUp = () => {
        setRotation({ x: 0, y: 0 });
    };
    return (
        <div className={"card"}  onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
             onTouchStart={handleMouseDown}
             onTouchEnd={handleMouseUp}
             style={{
                 transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
             }} >
            SomeCard
        </div>
    )
}