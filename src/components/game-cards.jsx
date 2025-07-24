import { useEffect } from "react";

function GameCards({ data, number, updateScore, onLoss, currentScore }) {
    // To switch card positions
    function getRandomElements(array, count) {
        const shuffled = [...array];

        // Using Fisher-Yates shuffle
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled.slice(0, count);
    }
    let cards = getRandomElements(data, number);

    // To make sure at least one card is still unclicked
    while (cards.every((card) => card.clicked) && currentScore < 12) {
        cards = getRandomElements(data, number);
    }

    function handleClick(card) {
        const cards = document.querySelectorAll(".front");
        const current = document.getElementById(card.name);
        cards.forEach((card) => {
            card.classList.remove("flip");
        });
        if (card.clicked) {
            onLoss();
        } else {
            card.clicked = true;
            current.classList.add("correct");
            setTimeout(() => {
                current.classList.remove("correct");
                updateScore();
            }, 200);
        }
    }

    useEffect(() => {
        const cards = document.querySelectorAll(".front");
        cards.forEach((card) => card.classList.add("flip"));
    });

    return (
        <>
            {cards.map((card) => {
                return (
                    <div
                        className="card"
                        onClick={() => handleClick(card)}
                        key={card.name}
                        id={card.name}
                    >
                        <div className="back"></div>
                        <div className="front">
                            <img src={card.img} alt="" />
                            <div className="textArea">
                                <p>{card.name}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default GameCards;
