/**

 Renders a table of high scores in the Bulls and Cows game.
 @param {Array} scores - An array of high score objects, each containing a name and score value.
 @returns {JSX.Element} - A React element representing the high scores table.
 */
import React from "react";

function HighScores({ scores }) {
    return (
        <div className="card border-grey mb-3 ">
            <div className="card-header bg-grey text-black">
                <h3>High Scores</h3>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{score.name}</td>
                            <td>{score.score}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HighScores;
