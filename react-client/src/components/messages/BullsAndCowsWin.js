import HighScores from "./HighScores";

import React, {useState, useEffect} from "react";

function BullsAndCowsWin({numOfGuesses}) {
    const [name, setName] = useState("");
    const [highScores, setHighScores] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        fetch("/api/highScores")
            .then(handleResponse)
            .then(handleJson)
            .catch(handleError);
    }, []);

    function handleResponse(response) {
        if (!response.ok) {
            throw new Error(`Some error occurred : ${response.status} ${response.statusText}`);
        }
        return response.json();
    }

    function handleJson(jsonObj) {
        setHighScores(jsonObj.scores);
    }

    const handleChange = (event) => {
        setName(event.target.value);
    };

    function handleError(error) {
        console.log(error.toString());
    }

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
