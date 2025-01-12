//Main Game Layout interface
import styles from './styles/Games.module.css'
import style from './styles/Board.module.css'
import Board from './sub-components/rows.tsx'
import BoardSmall from './sub-components/Board-smaller.tsx'

interface GameProps {
    onSquareClick: (position: string, target?:boolean) => void;
  }

export const Game: React.FC<GameProps> = ({ onSquareClick }) => {
    return(
        <div className={styles.game}>
            <Board onSquareClick={onSquareClick}/>
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