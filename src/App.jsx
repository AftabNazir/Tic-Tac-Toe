import { Routes, Route } from 'react-router-dom';
import Board from './TicTacToe/Board';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <div className='bg-gray-800 h-screen flex flex-col items-center justify-center'>
    <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      
      <Route path="/" element={<Board />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
