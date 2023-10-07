
import { useState,useEffect } from 'react';
import Board from '../Component/Board';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Header from '../Component/Header'

 
  const instructionsStyle = {
	'marginTop': '5px',
	'marginBottom': '5px',
	'fontWeight': 'bold',
	'fontSize': '16px',
  }
  
 



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

  
  function reSet()
  {
	setCurrentMove(0)
  }
  const navigate=useNavigate()
  
  async function checkLogin()
  {
	  try {
		  const res=await axios.get('/home',{
			  headers: {
				  'token': localStorage.getItem('token'),
			  },
		  })
		  const status=res.data.status;
		  if(status!=='ok')
		  {
			return navigate('/login')
		  }
		  
	  } catch (error) {
		  console.log(error)
	  }
	  
  }
  useEffect(()=>
  {
	  checkLogin()

  },[])

 
  return (
	<>
	<Header />
    <div className="game mt-5">

      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} reSet={reSet} />
      </div>      
    </div>
	</>
  );
}

