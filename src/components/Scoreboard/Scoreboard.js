function Scoreboard({currentScore, topScore}) {
    return (
        <div className="scoreboard-container">
            <div className="current-score-container sub-score-cont">
                <p>Current Score: {currentScore}</p>
            </div>
            <div className="max-score-container sub-score-cont">
                <p>Top Score: {topScore}</p>
            </div>
        </div>  
    );
}

export default Scoreboard;