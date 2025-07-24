import { useEffect } from "react";
import { useState } from "react";
import GameCards from "./game-cards";
import "../styles/game-screen.css";

function Game({ renderingData, gameEnd }) {
    const [score, setScore] = useState(0);

    const handleLoss = () => {
        gameEnd("lose", score);
    };

    const handleWin = () => {
        gameEnd("win", score);
    };

    if (score >= 12) {
        handleWin();
    }

    const cards = renderingData.cards;
    const particles = renderingData.particles;

    useEffect(() => {
        // Load the particle effects
        particles.load("particles", {
            fullScreen: { enable: false },
            particles: {
                number: {
                    value: 20,
                    density: { enable: true, area: 800 },
                },
                shape: {
                    type: "image",
                    image: {
                        src: "./src/assets/leaf.svg",
                        width: 32,
                        height: 32,
                    },
                },
                opacity: {
                    value: 0.4,
                    random: true,
                },
                size: {
                    value: 8,
                    random: { enable: true, minimumValue: 5 },
                },
                color: {
                    value: "#ff6b6b",
                },
                move: {
                    enable: true,
                    speed: 0.5,
                    direction: "bottom",
                    outModes: { default: "out" },
                },
            },
            background: {
                color: "transparent",
            },
        });
    }, []);

    function incrementScore() {
        setScore(score + 1);
    }

    const isDesktop = window.innerWidth >= 768; // to use different number of cards for mobile and desktop

    return (
        <>
            <div id="particles"></div>
            <div className="game">
                <header>
                    <h1>Memory Cards</h1>
                </header>
                <main>
                    <section className="cardSection">
                        <GameCards
                            data={cards}
                            number={isDesktop ? 8 : 4}
                            updateScore={incrementScore}
                            onLoss={handleLoss}
                        />
                    </section>
                    <section className="scoreSection">
                        <h2>Score: {score}</h2>
                    </section>
                </main>
            </div>
        </>
    );
}

export default Game;
