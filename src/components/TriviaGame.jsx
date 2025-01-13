import React, { useEffect, useState } from "react";
import QuestionCard from "./Question";

export default function TriviaGame({ category, resetCategory }) {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=1&category=${category}&type=multiple&difficulty=easy`)
            .then((res) => res.json())
            .then((data) => setQuestions(data.results));
    }, [category]);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        const nextIndex = currentIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentIndex(nextIndex);
        } else {
            alert(`Game Over! Your score: ${score + (isCorrect ? 1 : 0)}`);
            resetCategory();
        }
    };

    if (questions.length === 0) return <p className="text-center">Loading questions...</p>;

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Trivia Game</h2>
            <QuestionCard
                question={questions[currentIndex]}
                onAnswer={handleAnswer}
            />
            <p className="mt-4">
                Question {currentIndex + 1}/{questions.length}
            </p>
            <p className="mt-2">Score: {score}</p>
        </div>
    );
}
