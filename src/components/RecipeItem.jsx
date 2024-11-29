import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function RecipeItem({item}) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item.strMealThumb} alt="recipe item" className="block w-full" />
      </div>
      <div>
        <h3 className="font-bold text-xl truncate text-black">
          {item.strMeal}
        </h3>
        <Link
          to={`/recipe/${item.idMeal}`}
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
    
  )
}

RecipeItem.propTypes = {
  item: PropTypes.object
}

export default RecipeItem