
function GameBtns ({ onReset, onBack, onForw }) {
  return (
    <>
      <button onClick={onReset}>
        reset
      </button>
      <button onClick={onBack}>
        backward 
      </button>
      <button onClick={onForw}>
        forward 
      </button>
    </>
  )
}

export default GameBtns