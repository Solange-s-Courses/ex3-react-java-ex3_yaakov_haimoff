import BullsAndCowsRules from "./BullsAndCowsRules";
import BullAndCowRestart from "./BullAndCowRestart";
import BullsAndCowsWin from "../messages/BullsAndCowsWin";
import BullsAndCowsLost from "../messages/BullsAndCowsLost";
import BullsAndCowsResult from "../messages/BullsAndCowsResult";
import BullAndCowNumberSelection from "../game/BullAndCowNumberSelection";
import BullAndCowGuessTable from "../game/BullAndCowGuessTable";
import useBullsAndCows from "../game/useBullsAndCows";

import React, {useState, useEffect} from "react";

function BullAndCowForm() {
    const [selectedNumbers, setSelectedNumbers] = useState(Array(4).fill(null));
    const [guess, setGuess] = useState("0000");
    const [isWon, setIsWon] = useState(false);
    const [isLost, setIsLost] = useState(false);
    const [guessResults, setGuessResults] = useState([]);
    const [secretNumber, setSecretNumber] = useState("");

    const numberOfDigits = 4;
    const numberOfGuesses = 10;

    function generateSecretNumber() {
        const digits = new Set();
        while (digits.size < numberOfDigits) {
            digits.add(Math.floor(Math.random() * 10));
        }
        console.log("guess:", Array.from(digits).join(","));
        setSecretNumber(Array.from(digits).join(""));
    }

    useEffect(() => {
        generateSecretNumber();
    }, []);

    const handleNumberSubmit = (event) => {
        event.preventDefault();
        setGuess(selectedNumbers.join(""));
    };
    const handleRestart = () => {

        generateSecretNumber();
        setSelectedNumbers(Array(numberOfDigits).fill(null));

        setGuess("0000");
        setIsWon(false);
        setIsLost(false);
        setGuessResults([]);
    };

    const [Bulls, Cows] = useBullsAndCows(numberOfDigits, guess, secretNumber);

    useEffect(() => {
        if (guess !== "" && guess !== "0000" && guess.length === numberOfDigits) {
            const newGuessResult = {
                guess: guess,
                bulls: Bulls,
                cows: Cows,
            };
            setGuessResults([...guessResults, newGuessResult]);
            if (Bulls === numberOfDigits) {
                setIsWon(true);
            } else if (guessResults.length === numberOfGuesses) {
                setIsLost(true);
            }
        }
    }, [Bulls, Cows]);

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