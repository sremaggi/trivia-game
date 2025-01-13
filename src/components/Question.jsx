import React, { useState } from "react";
import { decodeHtmlEntities } from "../utils/decodeHtml";

const Question = ({ question, onAnswer, score }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        setIsAnswered(true);
        setTimeout(() => {
            onAnswer(answer); // Pass the answer back to App
            setIsAnswered(false);
            setSelectedAnswer(null);
        }, 1000); // Wait 1 second to show feedback
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
                {decodeHtmlEntities(question.category)}
            </h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow mb-4">
                <p className="text-lg font-semibold mb-4">{decodeHtmlEntities(question.question)}</p>
                <ul className="space-y-2">
                    {[...question.incorrect_answers, question.correct_answer]
                        .sort(() => Math.random() - 0.5)
                        .map((answer, index) => (
                            <li
                                key={index}
                                onClick={() => !isAnswered && handleAnswerClick(answer)}
                                className={`flex justify-center p-2 rounded-lg cursor-pointer text-white ${isAnswered && answer === selectedAnswer
                                    ? answer === question.correct_answer
                                        ? "bg-green-600"
                                        : "bg-red-600"
                                    : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                            >
                                {decodeHtmlEntities(answer)}
                            </li>
                        ))}
                </ul>
            </div>
            <p className="text-center text-lg">Score: {score}</p>
        </div>
    );
};

export default Question;
