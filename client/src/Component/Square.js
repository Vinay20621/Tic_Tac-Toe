const squareStyle = {
	'width':'60px',
	'height':'60px',
	'backgroundColor': '#ddd',
	'margin': '4px',
	'display': 'flex',
	'justifyContent': 'center',
	'alignItems': 'center',
	'fontSize': '20px',
	'color': 'white'
  }

function Square({ value, onSquareClick }) {
    const myValue = () => {
        if (value==="X") {
          return <div className="square bg-success" style={squareStyle} onClick={onSquareClick}>
               {value}
            </div>
        } else if (value==='O'){
          return <div className="square bg-danger" style={squareStyle} onClick={onSquareClick}>
          {value}
       </div>
        }
        else{
            return <div className="square" style={squareStyle} onClick={onSquareClick}>
               {value}
            </div>
        }
      };
    return (
        <>
        {myValue()}
      
        </>
     
    );
  }
 export default Square