// Import required libraries and components
import React from 'react' // For building UI components
import { useSelector, useDispatch } from 'react-redux' // To access the Redux store and dispatch actions
import { game } from 'reducers/game' // To access the game reducer
import { Player } from 'components/Player' // To display the player component

// Create the Stats component
export const Stats = () => {
  // Setup dispatch for dispatching actions to the Redux store
  const dispatch = useDispatch()
  // Get the winner and next player from the Redux store
  const winner = useSelector((store) => store.game.winner)
  const nextPlayer = useSelector((store) => store.game.player)

  // Handle button press for restarting the game
  const handleButtonPress = () => {
    dispatch(game.actions.restart()) // Dispatch restart action
  }

  // If there's a winner, show the winning message and a button to start a new game
  if (winner) {
    return (
      <div className="stats">
        <p>
          <Player value={winner} /> wins!!!!
        </p>
        <button type="button" onClick={handleButtonPress}>Start new game</button>
      </div>
    )
  }

  // If there's no winner, show the next player and a button to restart the game
  return (
    <div className="stats">
      <p>
        Next player <Player value={nextPlayer} />
      </p>
      <button type="button" onClick={handleButtonPress}>Restart</button>
    </div>
  )
}
