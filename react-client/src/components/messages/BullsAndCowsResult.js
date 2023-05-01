/**

 Renders a result message for each guess made by the player
 @param {number} bulls - The number of bulls for the current guess
 @param {number} cows - The number of cows for the current guess
 @returns {JSX.Element} - A React element representing the result message for the current guess
 */
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
// Exporting the component as the default export
export default BullsAndCowsResult;