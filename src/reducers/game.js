// Import required libraries and functions
import { createSlice } from '@reduxjs/toolkit' // To create a Redux slice
import { calculateWinner } from 'utils/calculateWinner' // To determine the winner of the game

// Define the initial state for a new game
const newGame = {
  squares: [
    null, null, null,
    null, null, null,
    null, null, null
  ],
  winner: null,
  player: 'x'
}

// Create the game slice with reducers for capturing a square and restarting the game
export const game = createSlice({
  name: 'game',
  initialState: newGame,
  reducers: {
    captureSquare: (state, action) => {
      const { index } = action.payload

      // If the square is 'uncaptured', capture it
      if (state.squares[index] === null) {
        state.squares[index] = state.player
      }

      // Change the player to the next player
      if (state.player === 'x') {
        state.player = 'o'
      } else {
        state.player = 'x'
      }

      // If a winner hasn't already been declared, then check
      // who the winner is
      if (!state.winner) {
        state.winner = calculateWinner(state.squares)
      }
    },
    restart: () => {
      // Reset the game state to the initial state
      return newGame
    }
  }
})