import { useState } from "react";
import WelcomeScreen from "./components/welcome-screen";
import "./App.css";

function App() {
    const [currentScreen, setCurrentScreen] = useState("welcome"); // To keep track of which screen to render

    if (currentScreen === "welcome")
        return <WelcomeScreen changeScreen={setCurrentScreen} />;
}

export default App;
