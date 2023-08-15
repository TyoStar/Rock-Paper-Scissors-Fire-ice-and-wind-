'use client'
import React, { useState, useEffect } from 'react';
import './page.css';
import { Background } from '../components/Fondo/page';
import { Patrick_Hand } from 'next/font/google';
const choices = ["rock", "paper", "scissors", "fire", "ice", "wind", "water"];


function randomPlay() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return `Tie`;
    } else if (
        (player === "fire" && (computer === "rock" || computer === "scissors")) ||
        (player === "water" && (computer === "fire" || computer === "ice")) ||
        (player === "ice" && (computer === "rock" || computer === "scissors")) ||
        (player === "scissors" && (computer === "paper" || computer === "water")) ||
        (player === "paper" && (computer === "rock" || computer === "air")) ||
        (player === "air" && (computer === "fire" || computer === "water")) ||
        (player === "rock" && (computer === "scissors" || computer === "water"))
    ) {
        return `You win!`;
    } else {
        return `You lose`;
    }
}
const CompraExitosa = () => {
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('');

    const handleChoiceSelect = (choice) => {
        setSelectedChoice(choice);
    };

    const selectChoice = (choice) => {
        setPlayerChoice(choice);
        setComputerChoice(randomPlay()); // Elegir elección aleatoria para la CPU

        if (playerChoice !== null) {
            playGame();
        }
    };

    useEffect(() => {
        if (playerChoice !== null) {
            playGame();
        }
    }, [playerChoice, computerChoice]);

    const playGame = () => {
        if (playerChoice === null) {
            setResult("Please choose your weapon.");
            return;
        }

        const gameResult = determineWinner(playerChoice, computerChoice);
        setResult(`${gameResult}`);
    };

    console.log("Hola", playerChoice)
    console.log(computerChoice)
  return (
    <div>
    <Background/>
    <div className='Resultado'>
        {result}
    </div>
    <div className='Yourchoice'>
        Your choice
        {playerChoice && <img className='player' src={`${playerChoice}.png`} alt={playerChoice} />}
    </div>
    
    <div className='CPUchoice'>
        CPU choice
        {computerChoice && <img className='CPU' src={`${computerChoice}.png`} alt={computerChoice} />}
    </div>
    <div className='vs'>
        VS
    </div>
    <div>
    <img className='vector' alt="Vector" src="Group.png" />
    <div className='choices-container'>
                {choices.map((choice) => (
                    <button
                        key={choice}
                        className={`choiceButton ${selectedChoice === choice ? 'selected' : ''}`}
                        onClick={() => selectChoice(choice)}
                    >
                        <img className={choice} alt={choice} src={`${choice}.png`} />
                    </button>
                ))}
            </div>
    </div>
    </div>
  );
};


export default CompraExitosa;
