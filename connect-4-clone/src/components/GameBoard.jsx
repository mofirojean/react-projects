import {useState} from 'react';
import GameCircle from './GameCircle';
import '../styles/Game.css';

const NO_CIRCLE = 16
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

    const initBoard = () => {
        const circles = []
        for (let i = 0; i < 16; i++) {
            circles.push(renderCircle(i));
        }
        return circles;
    }

    const circleClicked = (id) => {
        console.log('circle clicked: ', id);

        // we make a copy of the original array then we update the array before setting the new state
        // const board = [...gameBoard];
        // board[id] = currentPlayer;
        // one of the best ways to update an array state is to use map or filter because they don't mutate the state
        // this is because the spread syntax only makes shallow copies
        // setGameBoard(board);

        setGameBoard(prevState => {
            return prevState.map((circle, pos) => {
                if (pos === id) return currentPlayer;
                return circle
            })
        })

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
        // for primitives in the state we don't need to make a reference of them before updating them.
        // unlike the array where we had to make a reference;
        console.log(gameBoard);
        console.log(currentPlayer);
    }

    const renderCircle = (id) => {
        return  <GameCircle id={id} key={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />
    }
    return (
        <div className='gameBoard'>
            {initBoard()}
        </div>
    )
}

export default GameBoard;