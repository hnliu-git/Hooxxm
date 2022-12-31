
function Square({value, isWin, onSquareClick}) {
    return (
      <button className={`square ${isWin ? 'win': ''}`} onClick={onSquareClick}>
        {value}
      </button>
    );
}

export default Square