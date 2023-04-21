import React, { useState } from "react";

function BullsAndCowsRules() {
    const [showRules, setShowRules] = useState(false);

    // const handleClick = () => {
    //     setShowRules(!showRules);
    // };

    const handleClick = (event) => {
        event.preventDefault();
        const url = "/api/highScores"
        fetch(url,  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'datatype': 'json'
            },
            body: JSON.stringify({name: "name", score: 100})
        })
            .then(handleResponse)
            .catch(handleError);
    };
    function handleResponse(response) {
        if (!response.ok) {
            throw new Error(`Some error occured : ${response.status} ${response.statusText}`);
        }
        return response.json();
    }
    function handleError(error) {
        console.log(error.toString());
        // exercise: replace this error message with message inside the page:
        // create a div with bootstrap class "text-danger" to display the message
        // how will you define this message? prop or state?
    }

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
