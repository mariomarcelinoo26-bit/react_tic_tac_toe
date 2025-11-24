import { useState } from "react"; 
import Board from "./Board";

export default function Game() { 
const [history, setHistory] = useState([Array(9).fill(null)]); 
const [currentMove, setCurrentMove] = useState(0); 
const xIsNext = currentMove % 2 === 0;
const currentSquares = history[currentMove];

  
function handlePlay(nextSquares) {
const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
setHistory(nextHistory); 
setCurrentMove(nextHistory.length - 1);
} 
  
function jumpTo(move) {
setCurrentMove(move);
} 

const moves = history.map((_, move) => {
const description = move ? `Ir para jogada #${move}` : "Início do jogo";
return (
<li key={move}>
<button onClick={() => jumpTo(move)}>{description}</button>
</li>
);
});
  

return (
<div className="game">
<div className="game-board">
<Board squares={currentSquares} onPlay={handlePlay} xIsNext={xIsNext} /> 
</div>
<div className="game-info">
  <ol>{moves}</ol> 
</div>
  </div>
  ); 
}
