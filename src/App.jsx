import FoodList from "./components/FoodList";
import Seacrch from "./components/Seacrch"
import React, { useEffect, useState } from 'react'


function App() {

  const [league, setLeagueData] = useState([]);




  return (
    <>
    <Seacrch league={league} setLeagueData={setLeagueData}/>


    <FoodList league={league}/>

    </>
  )
}

export default App
