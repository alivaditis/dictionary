import search from '../images/icon-search.svg'

type SearchbarType = {
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  submitSearch: (e: React.FormEvent) => void
}

const Searchbar = ({query, setQuery, submitSearch}:SearchbarType) => {

  return (
    <div>
      <form className='searchbar' onSubmit={(e) => submitSearch(e)}>
        <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button className='submit' onClick={(e)=>submitSearch(e)}> <img className='search-img' src={search}/> </button>
      </form>
    </div>
  )
}

export default Searchbar