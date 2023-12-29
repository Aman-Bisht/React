import React from 'react'
import "./ResetButton.css"

function ResetButton({resetBoard,newGame}) {
  return (
    <div className='btn'>
    <button className="reset-btn" onClick={resetBoard}>Reset</button>
    <button className="reset-btn" onClick={newGame}>New</button>
    </div>
  )
}

export default ResetButton