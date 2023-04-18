import React from "react";

function NumberDropdown({selectedNumbers, setSelectedNumbers}) {
    const handleNumberClick = (number, index) => {
        setSelectedNumbers((prevSelectedNumbers) => {
            const newSelectedNumbers = [...prevSelectedNumbers];
            newSelectedNumbers[index] = number;
            return newSelectedNumbers;
        });
    };

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

export default NumberDropdown;