import {useState, useEffect} from "react";

function useBullsAndCowsLogic(
    guess,
    secretNumber,
    numberOfDigits,
    setGuessResults,
    guessResults,
) {
    const [Bulls, setBulls] = useState(0);
    const [Cows, setCows] = useState(0);

    useEffect(() => {
        const bulls = [];
        const cows = [];
        for (let i = 0; i < numberOfDigits; i++) {
            if (guess[i] === secretNumber[i]) {
                bulls.push(guess[i]);
            } else if (secretNumber.includes(guess[i])) {
                cows.push(guess[i]);
            }
        }
        setBulls(bulls.length);
        setCows(cows.length);

        if (guess !== "" && guess !== "0000" && guess.length === numberOfDigits) {
            const newGuessResult = {
                guess: guess,
                bulls: bulls.length,
                cows: cows.length,
            };
            setGuessResults([...guessResults, newGuessResult]);
        }
    }, [guess, secretNumber]);

    return [Bulls, Cows];
}

export default useBullsAndCowsLogic;
