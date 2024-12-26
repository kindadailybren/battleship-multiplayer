import styles from './styles/Moves.module.css';

interface MovesProps {
    clickedPosition: string | null;
  }

const Moves: React.FC<MovesProps> = ({ clickedPosition }) => {
    return (
        <div className={styles.card}>
            Enemy Move:<br></br>
            {clickedPosition}
        </div>
    )
}

export default Moves;   