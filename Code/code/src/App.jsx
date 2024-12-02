import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, toggleColor } from './chessRedux';

function ChessBoard() {
  const board = useSelector((state) => state.board);
  const dispatch = useDispatch();

  const handleSquareClick = (id) => {
    dispatch(toggleColor(id));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 gap-2">
      <h1 className='text-2xl font-bold'>ChessBoard</h1>
      <div className="grid grid-cols-8">
        {board.flat().map((square) => (
          <div
            key={square.id}
            className={`sm:w-16 w-10 sm:h-16 h-10 flex items-center justify-center cursor-pointer ${
              square.color === 'white' ? 'bg-white' : square.color === 'black' ? 'bg-black' : square.color === 'yellow' ? 'bg-yellow-600' : 'bg-red-600'
            }`}
            onClick={() => handleSquareClick(square.id)}
          ></div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ChessBoard />
    </Provider>
  );
}

export default App;
