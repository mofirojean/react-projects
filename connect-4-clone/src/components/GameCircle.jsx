import React from 'react';
import '../styles/Game.css';

const GameCircle = ({id, children, className, onCircleClicked}) => {
  return (
    <div className={`gameCircle player_0 ${className}`} onClick={() => onCircleClicked(id)}>
        {children}
    </div>
  )
}

export default GameCircle;