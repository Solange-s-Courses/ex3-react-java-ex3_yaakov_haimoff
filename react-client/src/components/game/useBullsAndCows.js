import { useState, useEffect } from "react";

function useBullsAndCows(numberOfDigits, guess, secretNumber) {
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
    }, [guess, secretNumber]);

    return [Bulls, Cows];
}

export default useBullsAndCows;