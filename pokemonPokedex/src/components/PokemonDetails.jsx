import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetails({pokemonName}){
    const {id} = useParams();
    const [pokemon , setPokemon] = useState({});
    async function downloadPokemon(){
        try {
            let response;
            if (pokemonName) {
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            } else {
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            }
        setPokemon({
            name : response.data.name,
            image : response.data.sprites.other.dream_world.front_default,
            weight : response.data.weight,
            height : response.data.height,
            types : response.data.types.map((t)=>t.type.name)
        })
        } catch (error) {
            console.log("something went wrong ",error);
        }
        
    }
    useEffect(()=>{
        downloadPokemon();
    },[]);
    return(
        <div className='pokemon-details-wrapper'>
            <img src={pokemon.image} alt="" className="pokemon-detail-image" />
            <div className="pokemon-name">Name : {pokemon.name}</div>
            <div className="pokemon-weight">Weight : {pokemon.weight}</div>
            <div className="pokemon-height">Height : {pokemon.height}</div>
            <div className="pokemon-types">
                {pokemon.types && pokemon.types.map((t)=><div key={t}>Type : {t}</div>)}
            </div>
        </div>
    )
}

export default PokemonDetails;