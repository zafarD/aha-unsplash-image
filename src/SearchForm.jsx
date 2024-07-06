import { useGlobalContext } from "./Context"

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext()
    const handleSubmit = (e) => {
        e.preventDefault()
        const searchValue = e.target.elements.search.value
        if(!searchValue) return
        setSearchTerm(searchValue)
    }

    return <section>
        <h1 className="title">aha from unsplash images</h1>
        <h4 className="title">search what you want to see</h4>
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-input search-input"
                name="search"
                placeholder="lion"
            />
            <button type="submit" className="btn">
                search
            </button>
        </form>
    </section>
}

export default SearchForm;