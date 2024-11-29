import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"
import axios from 'axios';
import NavigationBar from "../components/NavigationBar";
import FooterComponent from "../components/FooterComponent";

function RecipePage() {
    const {id} = useParams()
    const {recipeInfo, favouritesList, setRecipeInfo, handleAddToFavourite} = useContext(GlobalContext)
    const baseUrl = `https://www.themealdb.com/api/json/v1/1/`;
    const recipeApiId = `lookup.php?i=${id}`
    
    useEffect(() => {
        const fetchData = async () =>{
            const res = await axios.get(baseUrl+recipeApiId);
            console.log(res.data.meals);

            if(res?.data.meals){
                setRecipeInfo(res.data.meals[0])
            }
        }
        fetchData();
    }, [baseUrl, recipeApiId, setRecipeInfo]);      

    return (
        <>
        <NavigationBar/>
        <div className="container mx-auto px-2 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="row-start-2 lg:row-start-auto">
                    <div className="h-96 overflow-hidden rounded-xl group">
                        <img src={recipeInfo?.strMealThumb} className="w-full h-full object-cover block group-hover:scale-105 duration-300"/>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-sm text-cyan-700 font-medium">BBC Recipe</span>
                    <h3 className="font-bold text-2xl truncate text-black">{recipeInfo?.strMeal}</h3>
                    <div>
                    <button
                        onClick={() => handleAddToFavourite(recipeInfo)}
                        className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
                    >
                        {favouritesList && favouritesList.length > 0 && favouritesList.findIndex(
                        (item) => item.id === recipeInfo?.idMeal
                        ) !== -1
                        ? "Remove from favorites"
                        : "Add to favorites"}
                    </button>
                    </div>
                    <div>
                        <span className="text-2xl font-semibold text-black">Ingredients:</span>
                        <ul className="flex  indent-5"> 
                            <div className="w-1/2">
                            <li>{recipeInfo?.strMeasure1} <b>{recipeInfo?.strIngredient1}</b></li>
                            <li>{recipeInfo?.strMeasure2} <b>{recipeInfo?.strIngredient2}</b></li>
                            <li>{recipeInfo?.strMeasure3} <b>{recipeInfo?.strIngredient3}</b></li>
                            <li>{recipeInfo?.strMeasure4} <b>{recipeInfo?.strIngredient4}</b></li>
                            <li>{recipeInfo?.strMeasure5} <b>{recipeInfo?.strIngredient5}</b></li>
                            <li>{recipeInfo?.strMeasure6} <b>{recipeInfo?.strIngredient6}</b></li>
                            <li>{recipeInfo?.strMeasure7} <b>{recipeInfo?.strIngredient7}</b></li>
                            <li>{recipeInfo?.strMeasure8} <b>{recipeInfo?.strIngredient8}</b></li>
                            </div>
                            <div className="w-1/2">
                            <li>{recipeInfo?.strMeasure9} <b>{recipeInfo?.strIngredient9}</b></li>
                            <li>{recipeInfo?.strMeasure10} <b>{recipeInfo?.strIngredient10}</b></li>
                            <li>{recipeInfo?.strMeasure11} <b>{recipeInfo?.strIngredient11}</b></li>
                            <li>{recipeInfo?.strMeasure12} <b>{recipeInfo?.strIngredient12}</b></li>
                            <li>{recipeInfo?.strMeasure13} <b>{recipeInfo?.strIngredient13}</b></li>
                            <li>{recipeInfo?.strMeasure14} <b>{recipeInfo?.strIngredient14}</b></li>
                            <li>{recipeInfo?.strMeasure15} <b>{recipeInfo?.strIngredient15}</b></li>
                            <li>{recipeInfo?.strMeasure16} <b>{recipeInfo?.strIngredient16}</b></li>
                            <li>{recipeInfo?.strMeasure17} <b>{recipeInfo?.strIngredient17}</b></li>
                            <li>{recipeInfo?.strMeasure18} <b>{recipeInfo?.strIngredient18}</b></li>
                            <li>{recipeInfo?.strMeasure19} <b>{recipeInfo?.strIngredient19}</b></li>
                            <li>{recipeInfo?.strMeasure20} <b>{recipeInfo?.strIngredient20}</b></li> 
                            </div> 
                        </ul> 
                    </div>
                </div>
            </div>
            <div className="w-full">
                <span className="text-2xl font-semibold text-black">Instructions:</span>
                <p>{recipeInfo?.strInstructions} </p>
            </div>
        </div>
        <FooterComponent/>
        </>
    )
}

export default RecipePage