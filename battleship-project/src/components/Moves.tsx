import styles from './styles/Moves.module.css';

interface MovesProps {
    clickedPosition: string | null;
    isShip: boolean | undefined;
  }

const Moves: React.FC<MovesProps> = ({ clickedPosition, isShip }) => {
    return (
        <div className={styles.card}>
            Enemy Move:{isShip ? " hit" : ""}<br></br>
            {clickedPosition} 
        </div>
    )
}

export default Moves;   