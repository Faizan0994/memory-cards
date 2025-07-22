import "../styles/load-screen.css";
import { useEffect } from "react";
import loadingSymbol from "../assets/loading-symbol.svg";

function Loading({ load, changeScreen, returnData }) {
    function sleep(ms) {
        // To add delays
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    useEffect(() => {
        async function handleLoading() {
            await sleep(1500); // Delay on purpose.
            load().then((cards) => {
                returnData(cards);
                changeScreen("game");
            });
        }

        handleLoading();
    });

    return (
        <div className="loading">
            <div className="loading-display">
                <img src={loadingSymbol} alt=""></img>
                <p className="loading-text">Loading Cards...</p>
                <p className="loading-subtext">
                    This may take a while, depending on your internet connection
                </p>
            </div>
        </div>
    );
}

export default Loading;
