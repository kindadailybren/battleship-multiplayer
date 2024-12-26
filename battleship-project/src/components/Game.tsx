//Main Game Layout interface
import styles from './styles/Games.module.css'
import style from './styles/Board.module.css'
import Board from './sub-components/rows.tsx'
import BoardSmall from './sub-components/Board-smaller.tsx'

export const Game = () => {
    return(
        <div className={styles.game}>
            <Board />
         </div>
    )
}

export const GameSmaller = () => {
    return(
        <div className={style.games}>
            <BoardSmall />
         </div>
    )
}