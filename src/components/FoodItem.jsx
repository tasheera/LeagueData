import React from 'react'

function FoodItem({leagueItem}) {
  return (
    <div className='data'>
      <h2> {leagueItem.strLeague}</h2>

      <img src={`${leagueItem.strLogo}/preview`} alt="Logo" />
    </div>
  )
}

export default FoodItem
