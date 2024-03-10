import React from 'react';
import GameCircle from './GameCircle';
import '../styles/Game.css';

const GameBoard = () => {
    const cicleClicked = (id) => {
        console.log('circle clicked: ', id)
    }
    return (
        <div className='gameBoard'>
            <GameCircle id={1} onCircleClicked={cicleClicked} />
            <GameCircle id={2} onCircleClicked={cicleClicked} />
            <GameCircle id={3} onCircleClicked={cicleClicked} /> 
            <GameCircle id={4} onCircleClicked={cicleClicked} />
            <GameCircle id={5} onCircleClicked={cicleClicked} />
            <GameCircle id={6} onCircleClicked={cicleClicked} />
            <GameCircle id={7} onCircleClicked={cicleClicked} />
            <GameCircle id={8} onCircleClicked={cicleClicked} />
            <GameCircle id={1} onCircleClicked={cicleClicked} />
            <GameCircle id={2} onCircleClicked={cicleClicked} />
            <GameCircle id={3} onCircleClicked={cicleClicked} /> 
            <GameCircle id={4} onCircleClicked={cicleClicked} />
            <GameCircle id={5} onCircleClicked={cicleClicked} />
            <GameCircle id={6} onCircleClicked={cicleClicked} />
            <GameCircle id={7} onCircleClicked={cicleClicked} />
            <GameCircle id={8} onCircleClicked={cicleClicked} />
        </div>
    )
}

export default GameBoard;