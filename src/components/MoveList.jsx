export default function MoveList({ moves, isAscending, onToggleSort, currentMove, onJump }) {
    const list = isAscending ? moves : [...moves].reverse()
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">History</h2>
                <button
                    onClick={onToggleSort}
                    className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15 text-sm text-white/90"
                >
                    Sort: {isAscending ? 'Ascending' : 'Descending'}
                </button>
            </div>

            <ol className="space-y-2 max-h-[420px] overflow-auto pr-1">
                {list.map(({ move, description }) => (
                    <li key={move}>
                        {move === currentMove ? (
                            <span className="inline-block w-full px-3 py-1.5 rounded-md bg-indigo-600 text-white text-sm">
                                You are at move #{move}
                            </span>
                        ) : (
                            <button
                                onClick={() => onJump(move)}
                                className="text-left w-full  px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-white/90 text-sm"
                            >
                                {description}
                            </button>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    )
}
