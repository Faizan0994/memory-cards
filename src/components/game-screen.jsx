import { useEffect } from "react";
import "../styles/game-screen.css";

function Game({ renderingData }) {
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

    return (
        <>
            <div id="particles"></div>
            <div className="game">
                <header>
                    <h1>Memory Cards</h1>
                </header>
                <main>
                    <section className="cardSection">
                        <div className="card">
                            <img src={cards[0].img} alt="" />
                            <div className="textArea">
                                <p>{cards[0].name}</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={cards[1].img} alt="" />
                            <div className="textArea">
                                <p>{cards[1].name}</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={cards[2].img} alt="" />
                            <div className="textArea">
                                <p>{cards[2].name}</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={cards[3].img} alt="" />
                            <div className="textArea">
                                <p>{cards[4].name}</p>
                            </div>
                        </div>
                    </section>
                    <section className="scoreSection">
                        <h2>Score: 0</h2>
                    </section>
                </main>
            </div>
        </>
    );
}

export default Game;
