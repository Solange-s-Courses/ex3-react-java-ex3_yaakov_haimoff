/**
 Renders a message indicating that the player has lost the game
 @returns {JSX.Element} - A React element representing the message indicating that the player has lost the game
 */
function BullsAndCowsLost() {

    return (
        <div>
            <div
                style={{
                    backgroundColor: "lightgreen",
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)",
                }}
            >
                <h2>You lost, try again!</h2>
                <p>Hit restart to play again.</p>
            </div>
            <br />
        </div>
    );
}

// Exporting the component as the default export
export default BullsAndCowsLost;