import React from "react";

function BullsAndCowsResult({bulls, cows}) {
    return (
        <div>
            <div
                style={{
                    backgroundColor: "lightblue",
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)",
                }}
            >
                <div>Your guess: {bulls} Bulls and {cows} Cows.</div>
            </div>
            <br/>
        </div>
    );
}

export default BullsAndCowsResult;
