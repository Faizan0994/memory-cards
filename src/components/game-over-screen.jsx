import { useRef, useEffect } from "react";
import "../styles/game-over-screen.css";
function GameOver({ data, changeScreen }) {
    const [winLose, score] = data;
    const clickRef = useRef(null);
    const winRef = useRef(null);
    const loseRef = useRef(null);

    function gameOverMessage() {
        if (winLose === "lose") return "Game Over";
        else if (winLose === "win") return "You Win!";
        else return "Scoring system failed";
    }

    const restart = () => {
        if (clickRef) clickRef.current.play();
        setTimeout(() => {
            changeScreen("loading");
        }, 200);
    };

    useEffect(() => {
        if (winLose === "lose") {
            if (loseRef) {
                loseRef.current.volume = 0.5;
                loseRef.current.play();
            }
        } else if (winLose === "win") {
            if (winRef) {
                winRef.current.volume = 0.5;
                winRef.current.play();
            }
        }
        setTimeout(() => {
            document.querySelector(".game-over").classList.add("fade-in");
        }, 0);
    });

    return (
        <div className="game-over">
            <audio
                src="./src/assets/click.wav"
                ref={clickRef}
                volume="0.5"
            ></audio>
            <audio src="./src/assets/sparkle.wav" ref={winRef}></audio>
            <audio src="./src/assets/beep.wav" ref={loseRef}></audio>
            <div className="game-end-info">
                <h1>{gameOverMessage()}</h1>
                <p>Score: {score}</p>
                <button onClick={restart}>Play Again</button>
            </div>
        </div>
    );
}

export default GameOver;
