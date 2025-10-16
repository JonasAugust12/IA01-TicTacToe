import { useState } from 'react'
import Board from './Board.jsx'
import MoveList from './MoveList.jsx'

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const [isAscending, setIsAscending] = useState(true)
    const [moveLocations, setMoveLocations] = useState([])

    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove]

    function handlePlay(nextSquares, index) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        const row = Math.floor(index / 3) + 1
        const col = (index % 3) + 1
        const nextMoveLocations = [...moveLocations.slice(0, currentMove), { row, col }]

        setHistory(nextHistory)
        setMoveLocations(nextMoveLocations)
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
    }

    const moves = history.map((_, move) => {
        const description =
            move > 0
                ? `Go to move #${move} (${moveLocations[move - 1]?.row}, ${moveLocations[move - 1]?.col})`
                : 'Go to game start'
        return { move, description }
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white flex items-center justify-center p-4">
            <div className="w-full max-w-5xl grid gap-6 md:grid-cols-[1fr_320px]">
                <div className="bg-white/5 backdrop-blur rounded-2xl p-6 md:p-8 shadow-xl">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                </div>

                <div className="bg-white/5 backdrop-blur rounded-2xl p-6 md:p-8 shadow-xl">
                    <MoveList
                        moves={moves}
                        isAscending={isAscending}
                        onToggleSort={() => setIsAscending((v) => !v)}
                        currentMove={currentMove}
                        onJump={jumpTo}
                    />
                </div>
            </div>
        </div>
    )
}
