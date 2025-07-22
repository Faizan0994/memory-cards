import { useState } from "react";
import WelcomeScreen from "./components/welcome-screen";
import Loading from "./components/load-screen";
import loadCards from "./cards";
import "./App.css";

function App() {
    const [currentScreen, setCurrentScreen] = useState("welcome"); // To keep track of which screen to render
    const [cardsData, setCardsData] = useState({}); // To keep cards data

    if (currentScreen === "welcome")
        return <WelcomeScreen changeScreen={setCurrentScreen} />;
    else if (currentScreen === "loading")
        return (
            <Loading
                load={loadCards}
                changeScreen={setCurrentScreen}
                returnData={setCardsData}
            />
        );
}

export default App;
