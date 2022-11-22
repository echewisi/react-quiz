import React, { useState } from "react";
import "./App.css";
import qBank1 from "./quizQuestions/fiction questions";



function App() {
    const [showFinalResults, setFinalResults] = useState(false)
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const answerClicked = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < qBank1.length) {

            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            setFinalResults(true);
        }
    };

    const restartGame = () => {

        setScore(0);
        setCurrentQuestion(0);
        setFinalResults(false);
        
    }



    return (
        <div className="App">
            {/* {1. Header} */}
            <h1> WORLD QUIZ</h1>

            {/* {2. current score} */}
                <div className="score-card">
                    <h2>CURRENT SCORE:
                        {score}
                    </h2>
                </div>    
            
            {showFinalResults ? (

                /* 4. Final results */
                <div className="final-results">
                    <h1> Final results</h1>
                    <h2>
                        {score} out of {qBank1.length}correct
                    </h2>
                    <button onClick={() => restartGame()}> restart</button>
                </div>
            ) : (

                /* {3.Question card} */
                <div className="question-card">
                    <h2>Question {currentQuestion + 1} out of{qBank1.length} </h2>
                    <h3>{qBank1[currentQuestion].question}</h3>
                    <ul>
                        {qBank1[currentQuestion].answers.map((answer) => {
                            return (
                                <li onClick={() => answerClicked(answer.isCorrect)} key={answer.id}>{answer.text}</li>

                            )
                        }
                        
                        )}
                    </ul>
                </div>
                

            )}

        </div>
    )
}


export default App;