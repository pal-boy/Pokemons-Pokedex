
import Search from './Search'
import './Pokemondex.css'
import PokemonList from './PokemonList'

function Pokemondex(){
    return(
        <div className='pokedex-wrapper'>
            <Search/>
            <PokemonList/>
        </div>
    )
}
export default Pokemondex;