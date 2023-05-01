import React, { useState } from "react";

/**
 * Renders a "Bulls and Cows Rules" button and a set of rules for playing the game
 * @returns {JSX.Element} - A React element representing the component
 */
function BullsAndCowsRules() {
    // Defining a state variable to control whether the rules are shown or hidden
    const [showRules, setShowRules] = useState(false);

    // Handling the button click to toggle the display of the rules
    const handleClick = () => {
        setShowRules(!showRules);
    };

    // Rendering the component
    return (
        <div>
            <button type="button" className="btn btn-info" onClick={handleClick}>Bulls and Cows Rules</button>
            {/* Displaying the rules if the showRules state variable is true */}
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

// Exporting the component as the default export
export default BullsAndCowsRules;
