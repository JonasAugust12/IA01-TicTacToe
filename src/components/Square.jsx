export default function Square({ value, onSquareClick, highlight }) {
    const base =
        'w-24 h-24 md:w-28 md:h-28 flex items-center justify-center text-3xl md:text-4xl font-bold transition-colors border border-gray-400/50 '
    const normal =
        'bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
    const hl = 'bg-yellow-300 text-gray-900 dark:bg-yellow-500/80 dark:text-gray-900'
    return (
        <button
            onClick={onSquareClick}
            className={`${base} ${highlight ? hl : normal}`}
            aria-label={value ? `Cell ${value}` : 'Empty cell'}
        >
            {value}
        </button>
    )
}
