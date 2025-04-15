import React, { useEffect, useState } from 'react';
import Square from './Square';
import toast from 'react-hot-toast';
import { Button } from 'reactstrap';
export default function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [winner , setwinner] = useState(false )
  const [isXTurn, setisXTurn] = useState(true);

  const clickWinner = () => {
    const winnerlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerlogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };
useEffect(()=>{
  const result=clickWinner();
  if(result&&!winner){
    setwinner(result);
    toast.success(`${result} is Game Winner`)
  }
},[state, winner]) 
    const handleClick = (index) => {
      if (state[index] !== null || winner) return;
    const copyState = [...state];
    if (copyState[index] !== null) return; 
    copyState[index] = isXTurn ? 'X' : 'O';
    setState(copyState);
    setisXTurn(!isXTurn);
  };
const handleRefresh=()=>{
  setState(Array(9).fill(null))
  setisXTurn(true)
  setwinner(false)
}
  return (
    <>
    <div className='pt-10 pl-10'>
    <Button onClick={handleRefresh}>Start New Game</Button>
    </div>
      <div className='flex flex-col justify-center items-center gap-2 h-screen'>
        <div className=' flex justify-center  text-white h-10 w-100 text-4xl'>Tic Tac Toe Game</div>
        <div className='flex gap-2 '>
          <Square onClick={() => handleClick(0)} value={state[0]} />
          <Square onClick={() => handleClick(1)} value={state[1]} />
          <Square onClick={() => handleClick(2)} value={state[2]} />
        </div>
        <div className='flex gap-2'>
          <Square onClick={() => handleClick(3)} value={state[3]} />
          <Square onClick={() => handleClick(4)} value={state[4]} />
          <Square onClick={() => handleClick(5)} value={state[5]} />
        </div>
        <div className='flex gap-2'>
          <Square onClick={() => handleClick(6)} value={state[6]} />
          <Square onClick={() => handleClick(7)} value={state[7]} />
          <Square onClick={() => handleClick(8)} value={state[8]} />
        </div>
      </div>

    </>
  );
}
