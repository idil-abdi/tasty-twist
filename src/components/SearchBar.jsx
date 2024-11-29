import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import SearchDisplay from "./SearchDisplay";

function SearchBar() {
    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)
    // console.log(searchParam);
    
    return (
        <>
        <form className="max-w-[80rem] mt-3 mx-auto px-2" onSubmit={handleSubmit}>   
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className=" relative">
                <input value={searchParam} onChange={(e) => setSearchParam(e.target.value)} type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
        <SearchDisplay/>
        </>
    )
}

export default SearchBar