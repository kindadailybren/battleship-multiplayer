import styles from "../styles/Games.module.css";
import React, { useState } from "react";

interface SquareProps {
    target?: boolean;
    position: string;
    onClick?: (position:string, target?:boolean) => void;
}

const Squares: React.FC<SquareProps>= ({target, position, onClick}) =>{
    let [style, setStyle] = useState(styles.square);

    const handleClick = () => {
        setStyle(target ? styles.squareHit : styles.squareMiss)
        if(onClick && (style == styles.square)) onClick(position, target)
    }

    return (
        <div className={style} onClick={handleClick}></div>

    )
}

export default Squares;