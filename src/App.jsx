import { useState, useRef } from "react";
import WelcomeScreen from "./components/welcome-screen";
import Loading from "./components/load-screen";
import loadCards from "./cards";
import Game from "./components/game-screen";
import GameOver from "./components/game-over-screen";
import softPiano from "./assets/soft-piano.mp3";
import "./App.css";

function App() {
    const [currentScreen, setCurrentScreen] = useState("welcome"); // To keep track of which screen to render
    const [renderingData, setRenderingData] = useState({}); // To keep cards data
    const [endingData, setEndingData] = useState(["lose", 0]);
    const bgmRef = useRef(null); // For background music

    // To load both cards and background animations while on loading screen
    async function LoadCardsAndBackground() {
        const cardsPromise = loadCards();
        const particlesPromise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src =
                "https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js";
            script.onload = () => resolve(window.tsParticles);
            script.onerror = reject;
            document.body.appendChild(script);
        });

        const [cards, particles] = await Promise.all([
            cardsPromise,
            particlesPromise,
        ]);
        if (bgmRef) bgmRef.current.play();
        return { cards, particles };
    }

    function handleGameEnd(winLose, score) {
        setEndingData([winLose, score]);
        setCurrentScreen("gameOver");
    }

    function loader() {
        if (currentScreen === "welcome")
            return <WelcomeScreen changeScreen={setCurrentScreen} />;
        else if (currentScreen === "loading")
            return (
                <Loading
                    load={LoadCardsAndBackground}
                    changeScreen={setCurrentScreen}
                    returnData={setRenderingData}
                />
            );
        else if (currentScreen === "game")
            return (
                <Game renderingData={renderingData} gameEnd={handleGameEnd} />
            );
        else if (currentScreen === "gameOver")
            return (
                <GameOver data={endingData} changeScreen={setCurrentScreen} />
            );
    }
    return (
        <>
            <audio src={softPiano} loop ref={bgmRef} preload="auto"></audio>
            {loader()}
        </>
    );
}

export default App;
