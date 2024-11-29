import { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import PropTypes from 'prop-types'
import axios from 'axios';

export default function GlobalState({children}) {
    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([])
    const [recipeInfo, setRecipeInfo] = useState(null)
    const [favouritesList, setFavouritesList] = useState([])

    const baseUrl = `https://www.themealdb.com/api/json/v1/1/`;
    const searchApi = `search.php?s=${searchParam}`;

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.get(baseUrl+searchApi)
        .then(res => {
            if(res?.data?.meals) {
                setRecipeList(res?.data?.meals)
                setLoading(false)
                setSearchParam('')
            }
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
            setSearchParam('')
        } 
        );
    }   
    
    const handleAddToFavourite = (getCurrentItem) => {
        console.log(getCurrentItem.idMeal);
        let copyFavouritesList = [...favouritesList]
        const index = copyFavouritesList.findIndex(item => item.id === getCurrentItem.idMeal)

        if(index === -1){
            copyFavouritesList.push(getCurrentItem)
        } else {
            copyFavouritesList.splice(index)
        }
        setFavouritesList(copyFavouritesList)
    }

    // console.log(favouritesList);
    

    return (
        <GlobalContext.Provider value={{searchParam, loading, recipeList, recipeInfo, favouritesList, setFavouritesList, setRecipeInfo, setSearchParam, handleSubmit, handleAddToFavourite}}>
            {children}
        </GlobalContext.Provider>
    );
}

GlobalState.propTypes = {
    children: PropTypes.object
}