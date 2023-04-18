import React, { useState } from "react";

function BullsAndCowsWin({ onRestart }) {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting name:", name);
        // Send the name to the server or store it in state, etc.
        // Then call the onRestart function to restart the game.
        onRestart();
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <div
                style={{
                    backgroundColor: "lightgreen",
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)",
                }}
            >
                <h2>Congratulations, you won!</h2>
                <p>You may enter your name below to record your score.</p>
            </div>
            <br />

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter your name here"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default BullsAndCowsWin;
