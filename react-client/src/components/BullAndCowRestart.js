import React from "react";

function BullAndCowRestart({onRestart}) {
    return (
        <button type="button" className="btn btn-danger" onClick={onRestart}>
            Restart
        </button>
    );
}

export default BullAndCowRestart;
