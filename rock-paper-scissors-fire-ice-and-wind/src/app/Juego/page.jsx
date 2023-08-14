'use client'
import React, { useState } from 'react';
import { Background } from '../components/Fondo/page';
const choices = ["rock", "paper", "scissors", "fire", "ice", "air", "water"];

function randomPlay() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return `Tie. Both chose ${player}.`;
    } else if (
        (player === "fire" && (computer === "rock" || computer === "scissors")) ||
        (player === "water" && (computer === "fire" || computer === "ice")) ||
        (player === "ice" && (computer === "rock" || computer === "scissors")) ||
        (player === "scissors" && (computer === "paper" || computer === "water")) ||
        (player === "paper" && (computer === "rock" || computer === "air")) ||
        (player === "air" && (computer === "fire" || computer === "water")) ||
        (player === "rock" && (computer === "scissors" || computer === "water"))
    ) {
        return `You win! ${player} beats ${computer}.`;
    } else {
        return `You lose. ${computer} beats ${player}.`;
    }
}

export default function Home() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('');

    const selectChoice = (choice) => {
        setPlayerChoice(choice);
        setResult(`You chose: ${choice}`);
        setComputerChoice(randomPlay()); // Elegir elección aleatoria para la CPU

        if (playerChoice !== null) {
            playGame();
        }
    };

    const playGame = () => {
        if (playerChoice === null) {
            setResult("Please choose your weapon.");
            return;
        }

        const gameResult = determineWinner(playerChoice, computerChoice);

        setResult(`Player chose: ${playerChoice}\nComputer chose: ${computerChoice}\n${gameResult}`);
    };

    return (
        <div>
            <Background/>
            <h1>Welcome to Rock, Paper, Scissors, Fire, Ice, Air, Water!</h1>
            
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <h2>Player choice</h2>
                    <p>{playerChoice}</p>
                    {playerChoice && <img src={`${playerChoice}.png`} alt={playerChoice} />}
                </div>
                <div style={{ flex: 1 }}>
                    <h2>CPU choice</h2>
                    <p>{computerChoice}</p>
                    {computerChoice && <img src={`${computerChoice}.png`} alt={computerChoice} />}
                </div>
            </div>
            
            <div>
                <p>Choose your weapon:</p>
                <div>
                    {choices.map((choice) => (
                        <button key={choice} onClick={() => selectChoice(choice)}>
                            {choice}
                        </button>
                    ))}
                </div>
            </div>
            
            <p id="result">{result}</p>
        </div>
    );
}