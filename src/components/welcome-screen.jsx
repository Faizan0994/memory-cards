import "../styles/welcome-screen.css";

// Display's game title, info and play button
function WelcomeScreen({ changeScreen }) {
    const setLoadingScreen = () => {
        document.querySelector(".welcome").classList.add("fade"); // add fading effect to transition to loading screen
        document
            .querySelector(".welcome")
            .addEventListener("transitionend", () => {
                changeScreen("loading");
            });
    };
    return (
        <div className="welcome">
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
