import search from '../images/icon-search.svg'

type SearchbarType = {
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  submitSearch: (e: React.FormEvent) => void,
  searchEmpty: boolean;
}

const Searchbar = ({query, setQuery, submitSearch, searchEmpty}:SearchbarType) => {

  return (
    <div>
      <form className='searchbar' onSubmit={(e) => submitSearch(e)}>
        <input type='text' value={query} placeholder="Search for any word..." onChange={(e)=>setQuery(e.target.value)}
          className={searchEmpty ? 'error-border' : ''}
        />
        <button className='submit' onClick={(e)=>submitSearch(e)}> <img className='search-img' src={search}/> </button>
      </form>
      {searchEmpty && <p className='search-empty'>Whoops, can’t be empty…</p>}
    </div>
  )
}

export default Searchbar