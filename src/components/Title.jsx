export const TitlePage = () => {
    return (
        <div className="text-center mb-6">
            <h1 className="text-gray font-bold text-white mb-4 text-5xl">
                🧠 <span className="text-stone-400">Trivia </span>Challenge
            </h1>
            <p className="text-xs text-gray-300 mb-4">
                Test your knowledge, earn points, and have fun!
            </p>
            <a
                href="https://github.com/sremaggi/trivia-game"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-xs items-center bg-blue-600 hover:bg-blue-500 text-white font-light py-1 px-4 rounded-lg shadow-lg transition duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-2"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.173c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.776.419-1.306.762-1.605-2.665-.306-5.466-1.336-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.009-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.044.138 3.002.404 2.291-1.553 3.299-1.23 3.299-1.23.654 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.805 5.621-5.475 5.921.43.372.824 1.104.824 2.222v3.293c0 .321.22.694.825.576C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12z"
                        clipRule="evenodd"
                    />
                </svg>
                Star us !
            </a>
        </div>

    )
}