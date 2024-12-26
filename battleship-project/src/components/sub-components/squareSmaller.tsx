import styles from "../styles/Board.module.css";
import React, { useState } from "react";

interface SquareProps {
    target?: boolean;
}

const SquareSmall: React.FC<SquareProps> = ({target}) =>{
    let [style, setStyle] = useState(styles.square);

    const handleClick = () => {
        setStyle(target ? styles.squareHit : styles.squareMiss)
    }

    return (
        <div className={style} onClick={handleClick}></div>

    )
}

export default SquareSmall;