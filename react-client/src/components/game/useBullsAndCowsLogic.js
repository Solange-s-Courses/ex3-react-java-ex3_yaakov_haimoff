import {useState, useEffect} from "react";

/**
 A custom React hook for processing and tracking Bulls and Cows game logic.
 @param {string} guess - The current guess made by the player
 @param {string} secretNumber - The randomly generated secret number that the player is trying to guess
 @param {number} numberOfDigits - The number of digits in the secretNumber
 @param {function} setGuessResults - A function to update the array of guess results
 @param {array} guessResults - An array containing the player's previous guesses and their results
 @returns {array} - An array containing the number of bulls and cows for the current guess
 */
function useBullsAndCowsLogic(guess, secretNumber, numberOfDigits, setGuessResults, guessResults) {
    // Initializing state variables for the number of bulls and cows
    const [Bulls, setBulls] = useState(0);
    const [Cows, setCows] = useState(0);

    useEffect(() => {
        // Initializing empty arrays for the bulls and cows
        const bulls = [];
        const cows = [];
        // Looping through each digit in the guess and comparing it to the corresponding digit in the secretNumber
        for (let i = 0; i < numberOfDigits; i++) {
            if (guess[i] === secretNumber[i]) {
                // If the digit in the guess matches the digit in the secretNumber in both value and position, it is a bull
                bulls.push(guess[i]);
            } else if (secretNumber.includes(guess[i])) {
                // If the digit in the guess matches a digit in the secretNumber in value but not in position, it is a cow
                cows.push(guess[i]);
            }
        }

        // Updating the state variables for the number of bulls and cows
        setBulls(bulls.length);
        setCows(cows.length);

        // Adding the latest guess and its corresponding result to the guessResults array
        if (guess !== "" && guess !== "0000" && guess.length === numberOfDigits) {
            const newGuessResult = {
                guess: guess,
                bulls: bulls.length,
                cows: cows.length,
            };
            setGuessResults([...guessResults, newGuessResult]);
        }
    }, [guess, secretNumber]);

    // Returning the number of bulls and cows as an array
    return [Bulls, Cows];
}

export default useBullsAndCowsLogic;