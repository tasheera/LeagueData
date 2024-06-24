import React from 'react'

function FoodItem({leagueItem}) {
  return (
    <div>
      <p> {leagueItem.strLeague}</p>

      <img src={`${leagueItem.strLogo}/preview`} alt="Logo" />
    </div>
  )
}

export default FoodItem
