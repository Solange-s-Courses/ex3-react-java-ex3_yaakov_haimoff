// Importing necessary components
import BullsAndCowsRules from "./BullsAndCowsRules";
import BullAndCowRestart from "./BullAndCowRestart";
import BullsAndCowsWin from "../messages/BullsAndCowsWin";
import BullsAndCowsLost from "../messages/BullsAndCowsLost";
import BullsAndCowsResult from "../messages/BullsAndCowsResult";
import BullAndCowNumberSelection from "../game/BullAndCowNumberSelection";
import BullAndCowGuessTable from "../game/BullAndCowGuessTable";
import useBullsAndCowsLogic from "../game/useBullsAndCowsLogic";

import React, {useState, useEffect} from "react";

// Defining the main component
function BullAndCowForm() {

    // Defining the state variables using useState hook
    const [selectedNumbers, setSelectedNumbers] = useState(Array(4).fill(null));
    const [secretNumber, setSecretNumber] = useState("");
    const [guess, setGuess] = useState("0000");
    const [guessResults, setGuessResults] = useState([]);
    const [isWon, setIsWon] = useState(false);
    const [isLost, setIsLost] = useState(false);

    // Defining the constants
    const numberOfDigits = 4;
    const numberOfGuesses = 10;

    // Defining a function to generate a random secret number
    function generateSecretNumber() {
        const digits = new Set();
        while (digits.size < numberOfDigits) {
            digits.add(Math.floor(Math.random() * 10));
        }
        console.log("guess:", Array.from(digits).join(","));
        setSecretNumber(Array.from(digits).join(""));
    }

    // Using the useEffect hook to generate the secret number only once
    useEffect(() => {
        generateSecretNumber();
    }, []);

    // Handling the number submission on form submission
    const handleNumberSubmit = (event) => {
        event.preventDefault();
        setGuess(selectedNumbers.join(""));
    };

    // Restarting the game on clicking the restart button
    const handleRestart = () => {
        generateSecretNumber();
        setSelectedNumbers(Array(numberOfDigits).fill(null));
        setGuess("0000");
        setIsWon(false);
        setIsLost(false);
        setGuessResults([]);
    };

    // Using a custom hook to calculate the Bulls and Cows based on the user's guess
    const [Bulls, Cows] = useBullsAndCowsLogic(guess, secretNumber,
        numberOfDigits, setGuessResults, guessResults);

    // Checking if the game is won or lost after every guess
    useEffect(() => {
        if (Bulls === numberOfDigits) {
            setIsWon(true);
        } else if (guessResults.length === numberOfGuesses) {
            setIsLost(true);
        }
    }, [Bulls, Cows]);

    // Rendering the component
    return (
        <div className="bull-and-cow-form">
            <div className="bull-and-cow-form-content">
                <img src="/images/cows.png" alt="Game Image" className="bull-and-cow-form-img me-3"/>

                <div className="d-flex justify-content-between">
                    <BullsAndCowsRules/>
                    <BullAndCowRestart onRestart={handleRestart}/>
                </div>

                <br/>

                {!isWon && !isLost && (
                    <BullAndCowNumberSelection
                        selectedNumbers={selectedNumbers}
                        setSelectedNumbers={setSelectedNumbers}
                        handleNumberSubmit={handleNumberSubmit}
                    />
                )}
                {isWon ? (
                    <BullsAndCowsWin numOfGuesses={guessResults.length}/>
                ) : isLost ? (
                    <BullsAndCowsLost/>
                ) : (
                    <div>
                        {guessResults.length > 0 ? <BullsAndCowsResult bulls={Bulls} cows={Cows}/> : null}
                        <BullAndCowGuessTable guessResults={guessResults}/>
                    </div>
                )}
            </div>
            <div className="bull-and-cow-form-background"/>
        </div>
    );
}

export default BullAndCowForm;