// Create the calculateWinner function to determine the winner of the game
export const calculateWinner = (squares) => {
  // Define the winning combinations
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  // Loop through the winning combinations
  for (const line of lines) {
    const [a, b, c] = line // Destructure the indices of the winning combination

    // Check if there's a winning combination in the squares
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a] // Return the winner (either 'x' or 'o')
    }
  }

  // If no winner is found, return null
  return null
}