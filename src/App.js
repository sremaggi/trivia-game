import React, { useEffect, useState } from "react";
import Categories from "./components/Categories";
import Question from "./components/Question";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3); // Agrega estado para vidas

  const [gameOver, setGameOver] = useState(false);

  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://opentdb.com/api_category.php");
        const data = await response.json();
        setCategories(data.trivia_categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch a question when a category is selected
  const fetchQuestion = async (categoryId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=1&category=${categoryId}&type=multiple`
      );
      const data = await response.json();
      console.log("DATA: ", data)
      setQuestion(data.results[0]);
    } catch (error) {
      console.error("Error fetching question:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setScore(0);
    setLives(3); // Restablece vidas
    setGameOver(false);
    fetchQuestion(categoryId);
  };

  // Handle answer submission
  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === question.correct_answer) {
      setScore(score + 1);
      fetchQuestion(selectedCategory); // Load next question
    } else {
      setLives(lives - 1); // Resta una vida
      if (lives - 1 === 0) {
        setGameOver(true); // Fin del juego
      }
    }
  };

  // Handle reset to categories view
  const resetGame = () => {
    setSelectedCategory(null);
    setQuestion(null);
    setGameOver(false);
    setScore(0);
    setLives(3); // Reinicia vidas
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-medium text-center mb-2">Trivia Game</h1>



      {!selectedCategory && !gameOver && (
        <Categories
          categories={categories}
          onSelectCategory={handleCategorySelect}
        />
      )}

      {selectedCategory && question && !loading && !gameOver && (
        <Question
          question={question}
          onAnswer={handleAnswer}
          score={score}
          lives={lives}
        />
      )}

      {loading && <LoadingSpinner />}

      {gameOver && (
        <div className="text-center">
          <h2 className="text-9xl font-bold mb-4 text-red-700">Game Over!</h2>
          <p className="text-lg mb-4">Your Score: {score}</p>
          <button
            onClick={resetGame}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
