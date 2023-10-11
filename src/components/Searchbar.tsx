type SearchbarType = {
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  submitSearch: (e: React.FormEvent) => void
}

const Searchbar = ({query, setQuery, submitSearch}:SearchbarType) => {

  return (
    <div>
      <form onSubmit={(e) => submitSearch(e)}>
        <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button>search</button>
      </form>
    </div>
  )
}

export default Searchbar