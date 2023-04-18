import React, { useState } from "react";

function BullsAndCowsRules() {
    const [showRules, setShowRules] = useState(false);

    const handleClick = () => {
        setShowRules(!showRules);
    };

    return (
        <div>
            <button type="button" className="btn btn-info" onClick={handleClick}>Bulls and Cows Rules</button>
            {showRules && (
                <p style={{
                    background: 'white',
                    padding: '10px',
                    fontSize: '1.2rem',
                    color: 'darkslategrey',
                    fontWeight: 'bold'
                }}>
                The computer generates a secret 4-digit number.
                    <br />
                    The player tries to guess that number.
                    <br />
                    <br />
                    For each guess, the player receives feedback in the form of bulls and cows.
                    <br />
                    A bull means a correct digit in the correct position.
                    <br />
                    A cow means a correct digit in the wrong position.
                    <br />
                    <br />
                    For example, if the secret number is "1235" and the player guesses "1256", the result would be:
                    <br />
                    2 bull (digits 1 and 2 in the correct position)
                    <br />
                    1 cows (digit 5 in the wrong position)
                    <br />
                    <br />
                    The player continues guessing until they correctly guess the number.
                </p>
            )}
        </div>
    );
}

export default BullsAndCowsRules;
