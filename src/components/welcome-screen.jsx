import "../styles/welcome-screen.css";
import { useRef } from "react";
import click from "../assets/click.wav";

// Display's game title, info and play button
function WelcomeScreen({ changeScreen }) {
    const clickRef = useRef(null);
    const setLoadingScreen = () => {
        if (clickRef) clickRef.current.play();
        document.querySelector(".welcome").classList.add("fade"); // add fading effect to transition to loading screen
        document
            .querySelector(".welcome")
            .addEventListener("transitionend", () => {
                changeScreen("loading");
            });
    };
    return (
        <div className="welcome">
            <audio src={click} ref={clickRef} volume="0.5"></audio>
            <section className="game-info">
                <h1>Memory Cards Game</h1>
                <p>
                    Click on cards to get score. When you click the same card a
                    second time, the game is over.
                </p>
                <button onClick={setLoadingScreen}>Play</button>
            </section>
        </div>
    );
}

export default WelcomeScreen;
