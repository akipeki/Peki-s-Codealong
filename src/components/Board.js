// Import required libraries and components
import React from 'react' // For building UI components
import { useSelector } from 'react-redux' // To access the Redux store
import { Square } from 'components/Square' // To display each square on the board

// Create the Board component
export const Board = () => {
  // Get the current state of the squares from the Redux store
  const squares = useSelector((store) => (store.game.squares))

  // Render the Board component
  return (
    <div className="board">
      {/* Loop through the squares array and create a Square component for each square */}
      {squares.map((value, index) => (
        // Render the Square component with its value, index, and a unique key
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  )
}
