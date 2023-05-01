import React from "react";

/**
 * Renders a "Restart" button for the Bulls and Cows game
 * @param {function} onRestart - A function to handle the restart functionality for the game
 * @returns {JSX.Element} - A React element representing the "Restart" button
 */
function BullAndCowRestart({onRestart}) {
    // Rendering a button with a click handler for restarting the game
    return (
        <button type="button" className="btn btn-danger" onClick={onRestart}>
            Restart
        </button>
    );
}

// Exporting the component as the default export
export default BullAndCowRestart;
