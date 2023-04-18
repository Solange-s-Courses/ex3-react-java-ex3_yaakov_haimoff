function BullsAndCowsLost({}) {

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
                <p>You may hit restart to play again.</p>
            </div>
            <br />
        </div>
    );
}

export default BullsAndCowsLost;
