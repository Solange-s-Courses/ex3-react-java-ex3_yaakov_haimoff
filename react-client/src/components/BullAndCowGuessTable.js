function BullAndCowGuessTable({ guessResults }) {
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

export default BullAndCowGuessTable;