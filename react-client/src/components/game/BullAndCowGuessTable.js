/**
 * Renders a table of previous guesses and their corresponding number of Bulls and Cows
 * @param {array} guessResults - An array of objects representing previous guesses and their corresponding number of Bulls and Cows
 * @returns {JSX.Element} - A React element representing the table of previous guesses
 */
function BullAndCowGuessTable({ guessResults }) {
    // Rendering a table with the headers and the rows of previous guesses and their corresponding number of Bulls and Cows
    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>Guess</th>
                <th>Bulls</th>
                <th>Cows</th>
            </tr>
            </thead>
            <tbody>
            {/* Looping through the guessResults array to render a row for each guess */}
            {guessResults.map((result, index) => (
                <tr key={index}>
                    <td>{result.guess}</td>
                    <td>{result.bulls}</td>
                    <td>{result.cows}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

// Exporting the component as the default export
export default BullAndCowGuessTable;