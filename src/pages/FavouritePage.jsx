import { useContext } from "react"
import NavigationBar from "../components/NavigationBar"
import { GlobalContext } from "../context/GlobalContext"
import RecipeItem from "../components/RecipeItem"

function FavouritePage() {
  const {favouritesList} = useContext(GlobalContext)
    
    return ( 
      <>
        <NavigationBar/>
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {
                favouritesList && favouritesList.length > 0 ? 
                favouritesList.map((item, index) => <RecipeItem key={index} item={item}/>)
                : <div><p className="lg:text-4xl text-xl text-center text-black font-bold">Nothing is add in favourites</p></div>
            }
        </div> 
      </>
    )
}

export default FavouritePage