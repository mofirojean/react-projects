import React, {useState} from 'react';
import GameCircle from './GameCircle';
import '../styles/Game.css';

const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

    const circleClicked = (id) => {
        console.log('circle clicked: ', id);

        // we make a copy of the original array then we update the array before setting the new state
        const board = [...gameBoard];
        board[id] = currentPlayer;
        setGameBoard(board);

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
        // for primitives in the state we don't need to make a reference of them before updating them.
        // unlike the array where we had to make a reference
        console.log(board);
        console.log(currentPlayer)
    }

    const renderCircle = (id) => {
        return  <GameCircle id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />
    }
    return (
        <div className='gameBoard'>
            {renderCircle(0)}
            {renderCircle(1)}
            {renderCircle(2)}
            {renderCircle(3)}
            {renderCircle(4)}
            {renderCircle(5)}
            {renderCircle(6)}
            {renderCircle(7)}
            {renderCircle(8)}
            {renderCircle(9)}
            {renderCircle(10)}
            {renderCircle(11)}
            {renderCircle(12)}
            {renderCircle(13)}
            {renderCircle(14)}
            {renderCircle(15)}
        </div>
    )
}

export default GameBoard;