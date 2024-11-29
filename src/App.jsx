import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import FavouritePage from './pages/FavouritePage'
import RecipePage from './pages/RecipePage'

function App() {
  return (
    <>
      <div className='min-h-screen text-lg'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/favourite' element={<FavouritePage/>}/>
          <Route path='/recipe/:id' element={<RecipePage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
