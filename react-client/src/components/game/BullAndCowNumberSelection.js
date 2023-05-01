import NumberDropdown from "./NumberDropdown";

/**
 * Renders a set of number dropdowns and a "GO!" button for the user to submit their guess
 * @param {array} selectedNumbers - An array of numbers representing the user's current guess
 * @param {function} setSelectedNumbers - A function to update the user's current guess
 * @param {function} handleNumberSubmit - A function to handle the submission of the user's guess
 * @param {boolean} isWon - A boolean indicating whether the game has been won
 * @param {boolean} isLost - A boolean indicating whether the game has been lost
 * @returns {JSX.Element} - A React element representing the number selection section of the game
 */
function BullAndCowNumberSelection({
                                       selectedNumbers,
                                       setSelectedNumbers,
                                       handleNumberSubmit,
                                       isWon,
                                       isLost,
                                   }) {
    // Rendering a set of number dropdowns and a "GO!" button for the user to submit their guess
    return (
        <>
            <NumberDropdown
                selectedNumbers={selectedNumbers}
                setSelectedNumbers={setSelectedNumbers}
                disabled={isWon || isLost}
            />
            <br />
            <button type="submit" className="btn btn-primary lg"
                    onClick={handleNumberSubmit} disabled={isWon || isLost}>GO!</button>
            <br />
            <br />
        </>
    );
}

// Exporting the component as the default export
export default BullAndCowNumberSelection;