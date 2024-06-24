import React from 'react'
import FoodItem from './FoodItem'

function FoodList({league}) {

    let listItems=null
    if (league == null || league.length==0){

    }else{
    listItems=league.map ((leagueItem) =>
      <FoodItem leagueItem={leagueItem} key={leagueItem.idLeague}/>
      )
    }



  return (
    <div>
        {listItems}

    </div>
  )
}

export default FoodList
