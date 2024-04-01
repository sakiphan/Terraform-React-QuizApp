import React, { useState } from 'react';
import questionsData from './questions.json';
import './QuizApp.css';

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questionsData.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          <p>Score: {score} out of {questionsData.questions.length}</p>
          {score < 3 && <p>Your score is low! You can restart the quiz to try again.</p>}
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestionIndex + 1}</span>/{questionsData.questions.length}
            </div>
            <div className='question-text'>{questionsData.questions[currentQuestionIndex].question}</div>
          </div>
          <div className='answer-section'>
            {questionsData.questions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(index === questionsData.questions[currentQuestionIndex].correct_option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default QuizApp;
