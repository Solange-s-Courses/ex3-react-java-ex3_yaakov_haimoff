import React from "react";

/**
 * Renders a set of four number dropdowns for the user to select their guess
 * @param {array} selectedNumbers - An array of numbers representing the user's current guess
 * @param {function} setSelectedNumbers - A function to update the user's current guess
 * @returns {JSX.Element} - A React element representing the set of number dropdowns
 */
function NumberDropdown({selectedNumbers, setSelectedNumbers}) {
    // Handling a number click on a dropdown by updating the selectedNumbers array
    const handleNumberClick = (number, index) => {
        setSelectedNumbers((prevSelectedNumbers) => {
            const newSelectedNumbers = [...prevSelectedNumbers];
            newSelectedNumbers[index] = number;
            return newSelectedNumbers;
        });
    };

    // Rendering a set of four number dropdowns
    return (
        <div className="d-flex align-items-center">
            {[...Array(4)].map((_, index) => (
                <div key={index} className="me-2" style={{flexBasis: "25%"}}>
                    <select
                        className="form-select form-select-md"
                        aria-label=".form-select-md example"
                        onChange={(event) => handleNumberClick(event.target.value, index)}
                        value={selectedNumbers[index] ?? ""}
                    >
                        <option value="">Guess...</option>
                        {[...Array(10)].map((_, index) => (
                            <option key={index} value={index}>
                                {index}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
}

// Exporting the component as the default export
export default NumberDropdown;