import styles from "../styles/Games.module.css";
import React, { useState } from "react";

const Squares = () =>{
    let [style, setStyle] = useState(styles.square);

    const handleClick = () => {
        setStyle(styles.squareHit)
    }

    return (
        <div className={style} onClick={handleClick}></div>

    )
}

export default Squares;