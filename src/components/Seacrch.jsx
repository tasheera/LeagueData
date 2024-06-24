import React, { useEffect, useState } from 'react'

const url="https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c="

 function Seacrch({league, setLeagueData}) {

    const [query, setQuery] = useState("");


    useEffect(() => {
        async function fetchFood(){
           const response= await fetch(`${url}${query}&s=Soccer`)

           const data= await response.json()
           console.log(data.countries)
           setLeagueData(data.countries)
           
        }

        fetchFood()

        

    }, [query])

  return (
    <div>
        <label >Enter country name to find league </label>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='country name'/>

    </div>
  )
}

export default Seacrch

