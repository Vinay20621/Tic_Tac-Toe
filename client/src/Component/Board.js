import Square from '../Component/Square';
import calculateWinner from '../Component/CalculateWinner';
const rowStyle = {
	display: 'flex'
  }
  const boardStyle = {
	'backgroundColor': '#eee',
	'width': '208px',
	'alignItems': 'center',
	'justifyContent': 'center',
	'display': 'flex',
	'flexDirection': 'column',
	'border': '3px #eee solid'
  }
  const buttonStyle = {
	'marginTop': '15px',
	'marginBottom': '16px',
	'width': '80px',
	'height': '40px',
	'backgroundColor': 'green',
	'color': 'white',
	'fontSize': '16px',
  }
  const instructionsStyle = {
	'marginTop': '5px',
	'marginBottom': '5px',
	'fontWeight': 'bold',
	'fontSize': '16px',
  }
  
const containerStyle = {
	'display': 'flex',
	'alignItems': 'center',
	'flexDirection': 'column'
  }
function Board({ xIsNext, squares, onPlay , reSet}) {
    function handleClick(i) {
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares);
    }
  
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  
    return (
      <>
      <div style={containerStyle} className="gameBoard ">
        <div className="status" style={instructionsStyle}>{status}</div>
        

        <button style={buttonStyle} onClick={reSet}>Reset</button>
        <div style={boardStyle} className='form'>
        <div className="board-row" style={rowStyle}>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        </div>
        </div>
      </>
    );
  }
  export default Board