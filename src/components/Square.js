// Import required libraries and components
import React from 'react' // For building UI components
import { useDispatch } from 'react-redux' // To dispatch actions to the Redux store
import { game } from 'reducers/game' // To access the game reducer
import { Player } from 'components/Player' // To display the player component

// Create the Square component
export const Square = ({ value, index }) => {
  // Setup dispatch for dispatching actions to the Redux store
  const dispatch = useDispatch()

  // Handle click event for the square
  const handleClick = () => {
    // Dispatch the captureSquare action with the square's index
    dispatch(game.actions.captureSquare({ index }))
  }

  // Render the Square component
  return (
    <button
      // Add the 'clickable' class if the square is empty, otherwise just 'square'
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      {/* Display the player symbol (X or O) in the square */}
      <Player value={value} />
    </button>
  )
}
