import Square from "./Square";

export default function Board({ squares, onPlay, xIsNext }) { 
const nextValue = xIsNext ? "X" : "O";
const winner = calculateWinner(squares);
const status = winner
? `Vencedor: ${winner}`
: `Próximo jogador: ${nextValue}`;

  function handleClick(i) {
  if (squares[i] || winner) return;
  const nextSquares = squares.slice(); 
  nextSquares[i] = nextValue;
  onPlay(nextSquares);
} 
  
  return (
    <> 
  <div className="status">{status}</div> 
  <div className="board-row">
{[0, 1, 2].map(i => ( 
<Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
))}
</div>
<div className="board-row">
{[3, 4, 5].map(i => ( 
<Square key={i} value={squares[i]} onClick={() => handleClick(i)} /> 
))}
</div>
<div className="board-row">
{[6, 7, 8].map(i => (
<Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
))} 
</div> 
  </>
  );
} 
function calculateWinner(squares) { 
const lines = [
  
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
]; 
for (let [a,b,c] of lines) {
if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
  return squares[a];
  } 
} return null;
}














