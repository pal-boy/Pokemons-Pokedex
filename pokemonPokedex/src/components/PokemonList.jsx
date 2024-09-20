import { useEffect, useState } from "react";
import axios from 'axios'
import './PokemonList.css'
import Pokemon from "./Pokemon";

function PokemonList(){
    const [pokemonList , setPokemonList] = useState(0);
    const [isLoading , setIsLoading] = useState(true);
    const [POKEDEX_URL , setPOKEDEX_URL] = useState('https://pokeapi.co/api/v2/pokemon');
    const [prevURL , setPrevURL] = useState("");
    const [nextURL , setNextURL] = useState("");

    async function downloadPokemons(){
        setIsLoading(true);
        const response = await axios.get(POKEDEX_URL);
        const pokemonResults = response.data.results;
        // console.log(response);
        setNextURL(response.data.next);
        setPrevURL(response.data.previous);
        // console.log(pokemonResults);
        const pokemonResultPromise = pokemonResults.map((pokemon)=> axios.get(pokemon.url));
        // console.log(pokemonResultPromise);
        const pokemonData = await axios.all(pokemonResultPromise);
        // console.log(pokemonData);
        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                id:pokemon.id,
                name:pokemon.name , 
                image:pokemon.sprites.other.dream_world.front_default , 
                types:pokemon.types}
        })
        // console.log(res);
        setPokemonList(res);
        setIsLoading(false);
    }

    useEffect(()=>{
        downloadPokemons();
    },[POKEDEX_URL]);

    return(
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
                {(isLoading)? 'Pokemons Loading...' : pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)}
            </div>
            <div className="buttons">
                <button disabled = {prevURL == null} onClick={()=>setPOKEDEX_URL(prevURL)}>Previous</button>
                <button disabled = {nextURL == null} onClick={()=>setPOKEDEX_URL(nextURL)}>Next</button>
            </div>
        </div>
    )
}

export default PokemonList;