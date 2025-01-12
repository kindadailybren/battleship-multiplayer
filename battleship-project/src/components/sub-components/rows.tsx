import styles from "../styles/Games.module.css";
import Squares from "./squares.tsx";

interface BoardProps {
  onSquareClick: (position: string, target?:boolean) => void;
}

const Board:React.FC<BoardProps> = ({ onSquareClick }) => {
  const handleSquareClick = (position:string, target?:boolean) => {
    onSquareClick(position, target);
  }
  return (
    <>
      <div className={styles.row}>
        <Squares target={true} position="a1" onClick={handleSquareClick}/>
        <Squares position="a2" onClick={handleSquareClick}/>
        <Squares position="a3" onClick={handleSquareClick}/>
        <Squares position="a4" onClick={handleSquareClick}/>
        <Squares position="a5" onClick={handleSquareClick}/>
        <Squares position="a6" onClick={handleSquareClick}/>
        <Squares position="a7" onClick={handleSquareClick}/>
        <Squares position="a8" onClick={handleSquareClick}/>
        <Squares position="a9" onClick={handleSquareClick}/>
        <Squares position="a10" onClick={handleSquareClick}/>
      </div>
      <div className={styles.row}>
        <Squares target={true} position="b1" onClick={handleSquareClick}/>
        <Squares position="b2" onClick={handleSquareClick}/>
        <Squares position="b3" onClick={handleSquareClick}/>
        <Squares position="b4" onClick={handleSquareClick}/>
        <Squares position="b5" onClick={handleSquareClick}/>
        <Squares position="b6" onClick={handleSquareClick}/>
        <Squares position="b7" onClick={handleSquareClick}/>
        <Squares position="b8" onClick={handleSquareClick}/>
        <Squares position="b9" onClick={handleSquareClick}/>
        <Squares position="b10" onClick={handleSquareClick}/>
      </div>
      <div className={styles.row}>
        <Squares target={true} position="c1" onClick={handleSquareClick}/>
        <Squares position="c2" onClick={handleSquareClick}/>
        <Squares position="c3" onClick={handleSquareClick}/>
        <Squares position="c4" onClick={handleSquareClick}/>
        <Squares position="c5" onClick={handleSquareClick}/>
        <Squares position="c6" onClick={handleSquareClick}/>
        <Squares position="c7" onClick={handleSquareClick}/>
        <Squares position="c8" onClick={handleSquareClick}/>
        <Squares position="c9" onClick={handleSquareClick}/>
        <Squares position="c10" onClick={handleSquareClick}/>
      </div>
      <div className={styles.row}>
        <Squares target={true} position="d1" onClick={handleSquareClick}/>
        <Squares position="d2" onClick={handleSquareClick}/>
        <Squares position="d3" onClick={handleSquareClick}/>
        <Squares position="d4" onClick={handleSquareClick}/>
        <Squares position="d5" onClick={handleSquareClick}/>
        <Squares position="d6" onClick={handleSquareClick}/>
        <Squares position="d7" onClick={handleSquareClick}/>
        <Squares position="d8" onClick={handleSquareClick}/>
        <Squares position="d9" onClick={handleSquareClick}/>
        <Squares position="d10" onClick={handleSquareClick}/>
      </div>
      <div className={styles.row}>
        <Squares target={true} position="e1" onClick={handleSquareClick}/>
        <Squares position="e2" onClick={handleSquareClick}/>
        <Squares position="e3" onClick={handleSquareClick}/>
        <Squares position="e4" onClick={handleSquareClick}/>
        <Squares position="e5" onClick={handleSquareClick}/>
        <Squares position="e6" onClick={handleSquareClick}/>
        <Squares position="e7" onClick={handleSquareClick}/>
        <Squares position="e8" onClick={handleSquareClick}/>
        <Squares position="e9" onClick={handleSquareClick}/>
        <Squares position="e10" onClick={handleSquareClick}/>
      </div>
      <div className={styles.row}>
        <Squares target={true} position="f1" onClick={handleSquareClick}/>
        <Squares position="f2" onClick={handleSquareClick}/>
        <Squares position="f3" onClick={handleSquareClick}/>
        <Squares position="f4" onClick={handleSquareClick}/>
        <Squares position="f5" onClick={handleSquareClick}/>
        <Squares position="f6" onClick={handleSquareClick}/>
        <Squares position="f7" onClick={handleSquareClick}/>
        <Squares position="f8" onClick={handleSquareClick}/>
        <Squares position="f9" onClick={handleSquareClick}/>
        <Squares position="f10" onClick={handleSquareClick}/>
      </div>
      <div className={styles.row}>
        <Squares target={true} position="g1" onClick={handleSquareClick}/>
        <Squares position="g2" onClick={handleSquareClick}/>
        <Squares position="g3" onClick={handleSquareClick}/>
        <Squares position="g4" onClick={handleSquareClick}/>
        <Squares position="g5" onClick={handleSquareClick}/>
        <Squares position="g6" onClick={handleSquareClick}/>
        <Squares position="g7" onClick={handleSquareClick}/>
        <Squares position="g8" onClick={handleSquareClick}/>
        <Squares position="g9" onClick={handleSquareClick}/>
        <Squares position="g10" onClick={handleSquareClick}/>
      </div>
      <div className={styles.row}>
        <Squares target={true} position="h1" onClick={handleSquareClick}/>
        <Squares position="h2" onClick={handleSquareClick}/>
        <Squares position="h3" onClick={handleSquareClick}/>
        <Squares position="h4" onClick={handleSquareClick}/>
        <Squares position="h5" onClick={handleSquareClick}/>
        <Squares position="h6" onClick={handleSquareClick}/>
        <Squares position="h7" onClick={handleSquareClick}/>
        <Squares position="h8" onClick={handleSquareClick}/>
        <Squares position="h9" onClick={handleSquareClick}/>
        <Squares position="h10" onClick={handleSquareClick}/>
      </div>
      <div className={styles.row}>
        <Squares target={true} position="i1" onClick={handleSquareClick}/>
        <Squares position="i2" onClick={handleSquareClick}/>
        <Squares position="i3" onClick={handleSquareClick}/>
        <Squares position="i4" onClick={handleSquareClick}/>
        <Squares position="i5" onClick={handleSquareClick}/>
        <Squares position="i6" onClick={handleSquareClick}/>
        <Squares position="i7" onClick={handleSquareClick}/>
        <Squares position="i8" onClick={handleSquareClick}/>
        <Squares position="i9" onClick={handleSquareClick}/>
        <Squares position="i10" onClick={handleSquareClick}/>
      </div>
      <div className={styles.row}>
        <Squares target={true} position="j1" onClick={handleSquareClick}/>
        <Squares position="j2" onClick={handleSquareClick}/>
        <Squares position="j3" onClick={handleSquareClick}/>
        <Squares position="j4" onClick={handleSquareClick}/>
        <Squares position="j5" onClick={handleSquareClick}/>
        <Squares position="j6" onClick={handleSquareClick}/>
        <Squares position="j7" onClick={handleSquareClick}/>
        <Squares position="j8" onClick={handleSquareClick}/>
        <Squares position="j9" onClick={handleSquareClick}/>
        <Squares position="j10" onClick={handleSquareClick}/>
      </div>
    </>
  );
};

export default Board;
