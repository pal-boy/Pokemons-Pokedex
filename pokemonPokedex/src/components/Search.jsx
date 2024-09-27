import './Search.css'
import useDebounce from '../hooks/useDebounce';

function Search({updateSearchTerm}){
    const debounceSearch = useDebounce((e)=> updateSearchTerm(e.target.value))
    return(
        <div className="search-wrapper">
            <input 
            id="search-text" 
            type="text" 
            placeholder="Pokemon name..." 
            onChange={debounceSearch}
            />
        </div>
    );
}

export default Search;