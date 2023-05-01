/**

 Renders the component when the player wins the Bulls and Cows game and submits their name and score
 @param {number} numOfGuesses - The number of guesses the player took to win the game
 @returns {JSX.Element} - A React element representing the win screen and high scores table
 */
import HighScores from "./HighScores";
import React, {useState} from "react";

function BullsAndCowsWin({numOfGuesses}) {
    const [name, setName] = useState("");
    const [highScores, setHighScores] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    /**
     * Performs a GET request to retrieve the current list of high scores
     */
    const doGet = () => {
        fetch("/api/highScores")
            .then(handleResponse)
            .then(handleJson)
            .catch(handleError);
    };

    /**
     * Handles the response from the API and throws an error if the response is not ok
     * @param {object} response - The response object from the API
     * @returns {object} - The response object parsed as JSON
     * @throws {Error} - If the response is not ok
     */
    function handleResponse(response) {
        if (!response.ok) {
            throw new Error(`Some error occurred : ${response.status} ${response.statusText}`);
        }
        return response.json();
    }

    /**
     * Updates the state with the list of high scores returned by the API
     * @param {object} jsonObj - The JSON object returned by the API
     */
    function handleJson(jsonObj) {
        setHighScores(jsonObj.scores);
    }

    /**
     * Updates the state with the value of the input field as the user types
     * @param {object} event - The input field change event
     */
    const handleChange = (event) => {
        setName(event.target.value);
    };

    /**
     * Handles errors that occur during the GET request
     * @param {Error} error - The error object that was thrown
     */
    function handleError(error) {
        console.log(error.toString());
    }

    /**
     * Handles the submission of the user's name and score to the API
     * @param {object} event - The form submission event
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        const url = "/api/highScores";
        const newScore = {name: name, score: numOfGuesses};
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newScore),
        })
            .then(handleResponse)
            .then(() => {
                // Update the list of high scores with the newly submitted score
                doGet()
                setHighScores([...highScores, newScore]);
                setSubmitted(true);
            })
            .catch(handleError);
    };
    return (
        <div>
            {!submitted && (
                <div className="bulls-and-cows-win-header">
                    <h2>Congratulations, you won!</h2>
                    <p>You may enter your name below to record your score.</p>
                </div>
            )}
            {!submitted && (
                <form onSubmit={handleSubmit} className="bulls-and-cows-win-form">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control bulls-and-cows-win-input"
                            placeholder="enter your name here"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary bulls-and-cows-win-submit">
                        Submit
                    </button>
                </form>
            )}
            {submitted && (
                <div>
                    <HighScores scores={highScores}/>
                </div>
            )}
        </div>
    );
}

export default BullsAndCowsWin;
