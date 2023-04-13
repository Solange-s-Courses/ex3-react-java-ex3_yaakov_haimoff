import React, { useState, useEffect } from "react";

function BullsAndCowsGame({ guess }) {
    const [secretNumber, setSecretNumber] = useState("");
    const [guessResults, setGuessResults] = useState([]);

    useEffect(() => {
        function generateNumber() {
            const digits = new Set();
            while (digits.size < 4) {
                digits.add(Math.floor(Math.random() * 10));
            }
            console.log("Secret Number: ", Array.from(digits).join(""));
            return Array.from(digits).join("");
        }

        setSecretNumber(generateNumber());
    }, []);

    function getBullsAndCows(guess) {
        const bulls = [];
        const cows = [];
        for (let i = 0; i < 4; i++) {
            if (guess[i] === secretNumber[i]) {
                bulls.push(guess[i]);
            } else if (secretNumber.includes(guess[i])) {
                cows.push(guess[i]);
            }
        }
        return {
            guess: guess,
            bulls: bulls.length,
            cows: cows.length,
        };
    }

    useEffect(() => {
        if (guess !== "" && guess !== "0000") {
            const newGuessResult = getBullsAndCows(guess);
            setGuessResults([...guessResults, newGuessResult]);
        }
    }, [guess]);

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Guess</th>
                    <th>Bulls</th>
                    <th>Cows</th>
                </tr>
                </thead>
                <tbody>
                {guessResults.map((result, index) => (
                    <tr key={index}>
                        <td>{result.guess}</td>
                        <td>{result.bulls}</td>
                        <td>{result.cows}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default BullsAndCowsGame;
