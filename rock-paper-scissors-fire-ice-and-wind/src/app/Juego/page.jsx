'use client'
import React, { useState, useEffect } from 'react';
import './page.css';
import Background from '../components/Fondo/page';
import Question from '../components/Botóninterrogación/page';
import ImageWithText from '../components/Botones/page';

const choices = ["rock", "paper", "scissors", "fire", "ice", "wind", "water"];

function randomPlay() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return `Tie`;
    } else if (
        (player === "fire" && (computer === "paper" || computer === "scissors" || computer === "ice")) ||
        (player === "water" && (computer === "fire" || computer === "rock" || computer === "scissors")) ||
        (player === "ice" && (computer === "paper" || computer === "wind" || computer === "water")) ||
        (player === "scissors" && (computer === "ice" || computer === "paper" || computer === "wind")) ||
        (player === "paper" && (computer === "wind" || computer === "water" || computer === "rock")) ||
        (player === "wind" && (computer === "fire" || computer === "water" || computer === "rock")) ||
        (player === "rock" && (computer === "scissors" || computer === "fire" || computer === "ice"))
    ) {
        return `You win!`;
    } else {
        return `You lose`;
    }
}

const Inicio = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [countdown, setCountdown] = useState(3);
  const [showComputerChoice, setShowComputerChoice] = useState(false); // Nuevo estado para mostrar elección de CPU
  const [startGame, setStartGame] = useState(false);

  const handleChoiceSelect = (choice) => {
      setSelectedChoice(choice);
  };

  const selectChoice = (choice) => {
      setPlayerChoice(choice);
      setComputerChoice(randomPlay());
      setCountdown(3);
      setStartGame(true);
      setShowComputerChoice(false); // Reiniciar el estado de la elección de CPU

      if (playerChoice !== null) {
          playGame();
      }
  };

  useEffect(() => {
      if (playerChoice !== null) {
          playGame();
      }
  }, [playerChoice, computerChoice]);

  useEffect(() => {
      if (countdown > 0) {
          const timer = setTimeout(() => {
              setCountdown(countdown - 1);
          }, 1000);
          return () => clearTimeout(timer);
      } else {
          setShowComputerChoice(true); // Mostrar la elección de CPU después del contador
      }
  }, [countdown]);

  const playGame = () => {
      if (playerChoice === null) {
          setResult("Please choose your weapon.");
          return;
      }

      const gameResult = determineWinner(playerChoice, computerChoice);
      setResult(`${gameResult}`);
  };
  return (
    <div>

    
    <div>
 
    <Question/>
    
    </div>
    <div className='choices-container'>
                {choices.map((choice) => (
                    <button
                        key={choice}
                        className={`choiceButton ${selectedChoice === choice ? 'selected' : ''}`}
                        onClick={() => selectChoice(choice) }
                    >
                       <ImageWithText
                        imageUrl={`${choice}.png`}
                        text={choice}
                      />
                        
                    </button>
                ))}
            </div>
    
    </div>
  );
};


export default Inicio;