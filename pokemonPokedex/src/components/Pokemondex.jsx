
import Search from './Search'
import './Pokemondex.css'
import PokemonList from './PokemonList'
import { useEffect, useState } from 'react';
import PokemonDetails from './PokemonDetails';

function Pokemondex(){
    const [searchTerm , setSearchTerm] = useState('');
    // useEffect(()=>{

    // },[searchTerm]);
    return(
        <div className='pokedex-wrapper'>
            <Search updateSearchTerm = {setSearchTerm}/>
            {(!searchTerm)? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName = {searchTerm}/>}
        </div>
    )
}
export default Pokemondex;