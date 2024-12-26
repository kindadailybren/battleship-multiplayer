//Main Game Layout interface
import styles from './styles/Games.module.css'
import Board from './sub-components/rows.tsx'

const Game = () => {
    return(
        <div className={styles.game}>
            <Board />
         </div>
    )
}

export default Game