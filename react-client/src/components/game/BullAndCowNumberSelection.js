import NumberDropdown from "./NumberDropdown";

function BullAndCowNumberSelection({
                                       selectedNumbers,
                                       setSelectedNumbers,
                                       handleNumberSubmit,
                                       isWon,
                                       isLost,
                                   }) {
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

export default BullAndCowNumberSelection;