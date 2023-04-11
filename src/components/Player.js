import React from 'react'
// Create the Player component
export const Player = ({ value }) => (
  <>
    {/* If the player value is 'x', display the 'x' symbol */}
    {value === 'x' && <span role="img" aria-label="x">❌</span>}
    {/* If the player value is 'o', display the 'o' symbol */}
    {value === 'o' && <span role="img" aria-label="o">⭕️</span>}
  </>
)
