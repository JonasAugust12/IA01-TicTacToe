import Square from './Square.jsx'
import { calculateWinner } from '../lib/gameLogic.js'

export default function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return
        const next = squares.slice()
        next[i] = xIsNext ? 'X' : 'O'
        onPlay(next, i)
    }

    const result = calculateWinner(squares)
    const status = result
        ? `Winner: ${result.winner}`
        : squares.every((s) => s !== null)
            ? 'Draw!'
            : `Next player: ${xIsNext ? 'X' : 'O'}`


    const boardRows = [];
    for (let row = 0; row < 3; row++) {
        const boardCols = [];
        for (let col = 0; col < 3; col++) {
            const index = row * 3 + col;
            boardCols.push(
                <Square
                    key={index}
                    value={squares[index]}
                    onSquareClick={() => handleClick(index)}
                    highlight={result?.line?.includes(index)}
                />
            );
        }
        boardRows.push(
            <div key={row} className="flex flex-row gap-0">
                {boardCols}
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Tic Tac Toe</h1>
            <p className={`mt-3 text-lg md:text-xl ${result ? 'text-emerald-300' : 'text-indigo-200'}`}>{status}</p>

            <div className="mt-6 flex flex-col items-center justify-center gap-0">
                {boardRows}
            </div>
        </div>
    )
}
