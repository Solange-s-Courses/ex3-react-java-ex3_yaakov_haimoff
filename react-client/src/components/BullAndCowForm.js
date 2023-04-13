import React, { useState } from "react";
import BullsAndCowsRules from "./BullsAndCowsRules";
import NumberDropdown from "./NumberDropdown";
import BullsAndCowsGame from "./BullsAndCowsGame";

function BullAndCowForm() {
    const [selectedNumbers, setSelectedNumbers] = useState(Array(4).fill(null));
    const [guess, setGuess] = useState("0000");

    const handleNumberSubmit = (event) => {
        event.preventDefault();
        setGuess(selectedNumbers.join(""));
    };

    return (
        <div className="bull-and-cow-form">
            <div className="bull-and-cow-form-content">
                <img
                    src="/images/cows.png"
                    alt="Game Image"
                    className="bull-and-cow-form-img me-3"
                />
                <BullsAndCowsRules />
                <br />
                <NumberDropdown
                    selectedNumbers={selectedNumbers}
                    setSelectedNumbers={setSelectedNumbers}
                />
                <br />
                <button
                    type="submit"
                    className="btn btn-primary lg"
                    onClick={handleNumberSubmit}
                >GO!
                </button>
                <br /><br />
                <BullsAndCowsGame guess={guess} />
            </div>
            <div className="bull-and-cow-form-background" />
        </div>
    );
}

export default BullAndCowForm;
