// Import required libraries and components
import React from 'react' // For building UI components
import { Provider } from 'react-redux' // To provide access to the Redux store
import { combineReducers, configureStore } from '@reduxjs/toolkit' // For creating the Redux store
import { game } from './reducers/game' // To access the game reducer
import { Board } from './components/Board' // To display the game board
import { Stats } from './components/Stats' // To display game statistics

// Combine reducers into a single reducer
const reducer = combineReducers({
  game: game.reducer // Add the game reducer
})

// Create the Redux store with the combined reducer
const store = configureStore({ reducer })

// Create the App component
export const App = () => {
  return (
    // Provide access to the Redux store for all child components
    <Provider store={store}>
      <main>
        {/* Render the Board and Stats components */}
        <Board />
        <Stats />
      </main>
    </Provider>
  )
}
