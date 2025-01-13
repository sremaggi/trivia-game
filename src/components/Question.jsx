import React, { useState, useEffect } from "react";
import { decodeHtmlEntities } from "../utils/decodeHtml";

const Question = ({ question, onAnswer, score, lives }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);


    // Shuffle answers once when the component mounts
    useEffect(() => {
        const allAnswers = [...question.incorrect_answers, question.correct_answer];
        setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
    }, [question]);

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
            <span className="flex text-sm text-stone-500  justify-center">Category</span>
            <h2 className="text-2xl font-light italic mb-4 text-center">
                {decodeHtmlEntities(question.category)}
            </h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow mb-4 flex-col">

                <p className="text-sm md:text-lg font-semibold mb-6  text-center">{decodeHtmlEntities(question.question)}</p>
                <ul className="space-y-2">
                    {shuffledAnswers.map((answer, index) => (
                        <li
                            key={index}
                            onClick={() => !isAnswered && handleAnswerClick(answer)}
                            className={`flex justify-center p-2 rounded-lg cursor-pointer text-white text-center text-xs md:text-lg ${isAnswered && answer === selectedAnswer
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
                <p className="text-xs mt-5 font-light text-end text-slate-500">{"Difficulty:  " + decodeHtmlEntities(question.difficulty)}</p>
            </div>

            <div className="flex flex-col grid grid-cols-2 ">
                <span className="flex text-sm text-stone-500  justify-center">Score</span>
                <span className="flex text-sm text-stone-500  justify-center">Lives</span>
                <p className="text-center text-3xl text-green-500">{score}</p>
                {/* Mostrando corazones para representar vidas */}

                <div className="flex space-x-2 mb-4 text-2xl justify-center">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <span key={index} className={`${index < lives ? "text-red-600" : "text-gray-700"}`}>
                            {index < lives ? "❤️" : "🖤"}
                        </span>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Question;
