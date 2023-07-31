import React from 'react'
import useSWR from 'swr'
// import '/App.css'
const fetcher = url => fetch(url).then(r => r.json())
const getIdFromUrl = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

function App() {

  const { data, error } = useSWR('https://pokeapi.co/api/v2/pokemon', fetcher)
if(data){
  console.log(data)

  return (
    <div>
    <h1>List of Pokémon</h1>
    <div style={{
      width:"100%",

      display:"grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr"
    }}>
      {data.results.map((pokemon) => (
        <div key={pokemon.name} style={{
          width:"100%"
        }}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(pokemon.url)}.png`}
            alt={pokemon.name}
            style={{
              width:"100%"
            }}
          />
         <span style={{
          textAlign:"center"
         }}>{pokemon.name} </span>
        </div>
      ))}
    </div>
  </div>)
}
if(error){
  console.log(error);
}

  
}

export default App