import { use, useEffect } from "react";
import "../styles/game-over-screen.css";
function GameOver({ data, changeScreen }) {
    const [winLose, score] = data;

    function gameOverMessage() {
        if (winLose === "lose") return "Game Over";
        else if (winLose === "win") return "You Win!";
        else return "Scoring system failed";
    }

    const restart = () => {
        changeScreen("loading");
    };

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".game-over").classList.add("fade-in");
        }, 0);
    });

    return (
        <div className="game-over">
            <div className="game-end-info">
                <h1>{gameOverMessage()}</h1>
                <p>Score: {score}</p>
                <button onClick={restart}>Play Again</button>
            </div>
        </div>
    );
}

export default GameOver;
