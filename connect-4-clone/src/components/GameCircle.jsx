import React from 'react';
import '../styles/Game.css';
// shortcut to generate a component rafce

const GameCircle = ({id, children, onCircleClicked}) => {

  return (
    <div className={`gameCircle ${id % 2 === 0 ? "odd" : "even"}`} onClick={() => onCircleClicked(id)}>
        {children}
    </div>
  )
}

export default GameCircle;